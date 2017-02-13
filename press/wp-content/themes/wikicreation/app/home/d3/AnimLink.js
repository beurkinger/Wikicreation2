import Event from './Event';

class AnimLink {
	constructor (link, view) {
		this.link = link;
		this._view = view;
		this.context = view.context;
		this.startX;
		this.startY;
		this.endX;
		this.endY;

		this.amount=0;
		var self = this;

		this.linkAnimated = new Event(this);
	}

	drawLink(){
		this.startX = this.link.source.x,
		this.startY = this.link.source.y,
		this.endX = this.link.target.x,
		this.endY = this.link.target.y;

		this.amount += 0.1;
		if (this.amount >= 1){
			this.amount = 1;
		}

		this.currentX = this.startX + (this.endX - this.startX)*this.amount;
		this.currentY = this.startY + (this.endY - this.startY)*this.amount;

		this.context.beginPath();
		this.context.moveTo(this.startX, this.startY);
		this.context.lineTo(this.currentX, this.currentY);
		this.context.lineWidth = 1;
		this.gradient = this.context.createLinearGradient(this.startX, this.startY, this.endX, this.endY);
		this.gradient.addColorStop(1, "#ff6666");
		this.gradient.addColorStop(0, "#242d5c");
		this.context.strokeStyle = this.gradient;
		this.context.stroke();
	}
}

module.exports = AnimLink;

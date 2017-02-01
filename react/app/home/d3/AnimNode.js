class AnimNode{
	constructor(node, view){
		this._view = view;
		this.node = node;
		this.context = view.context;
		this.text = node.name;
		this.txtHeight = 14;
		this.context.font = this.txtHeight +"px Verdana";

		switch (this.node.depth) {
			case 1:
				this.nodeRadius = 9;
				break;
			case 2:
				this.nodeRadius = 7;
				break;
			case 3:
				this.nodeRadius = 4;
				break;
		}

	}

	drawNode(){
		this.context.beginPath();
		this.context.moveTo(this.node.x + this.nodeRadius, this.node.y);
		this.context.arc(this.node.x, this.node.y, this.nodeRadius, 0, 2 * Math.PI);
		this.context.lineWidth = 10;
		this.context.strokeStyle = "#242d5c";
		this.context.stroke();
		if(this.node.depth <= 2){
			this.gradient = this.context.createLinearGradient(this.node.x, this.node.y-this.nodeRadius, this.node.x, this.node.y + this.nodeRadius*1.1);
			this.gradient.addColorStop(0.1, "#ff6666");
			this.gradient.addColorStop(1, "#242d5c");
			this.context.fillStyle = this.gradient;
		}
		else{
			this.context.fillStyle = "#ff6666";
		}
		this.context.fill();
	}

	drawText(){
		var txtWidth = this.context.measureText(this.text).width,
			X = this.node.x - txtWidth/2,
			Y = this.node.y;

		this.context.fillStyle = "#242d5c";
		this.context.fillRect(X, Y + this.txtHeight, txtWidth, this.txtHeight + 4);

		this.context.fillStyle = "white";
		this.context.fillText(this.text, X,Y+this.txtHeight*2);
	}
}

module.exports = AnimNode;

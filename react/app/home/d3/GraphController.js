import {select, mouse} from 'd3-selection';
class GraphController{
	constructor(model, view){
		this._model = model;
		this._view = view;
		this.hoverSubject;
		this.clickSubject;

		select(this._view.canvas)
		.on("click", this.click.bind(this))
		.on("mousemove", this.mousemove.bind(this));
	}


	mousemove(){
		if ( this.getSubject() != this.hoverSubject && ( this._model.permanentNodes.indexOf(this.getSubject())!=-1 || this._model.selectedNodes.indexOf(this.getSubject())!=-1 )){
			this.hoverSubject = this.getSubject();
			this._view.interactionHover = this.hoverSubject;

			this._model.showLink(this.hoverSubject);
			this._model.showNodes(this.hoverSubject);
		}
		else if(this.getSubject() == null){
			this.hoverSubject = "none";
			this._model.showLink(this.hoverSubject);
			this._model.showNodes(this.hoverSubject);
		}
	}

	click(){
		this._view.interactionIsClick = true;
		if(this.clickSubject == this.getSubject()){
			this._model.selectedNodes = [];
			this._view.interactionIsClick = false;
			this.clickSubject = [];

		}
		else{
			this.clickSubject = this.getSubject();
		}

		this._model.selectLinks(this.clickSubject);
		this._model.selectNodes(this.clickSubject);

		/*this._model.recurseLinksUp(subject);
		this._model.recurseLinksDown(subject);*/
	}

	getSubject(){
		return this._view.simulation.find(mouse(this._view.canvas)[0] - this._view.width/2, mouse(this._view.canvas)[1]- this._view.height/2, 30);
	}

}

module.exports = GraphController;

import {select, mouse} from 'd3-selection';
class GraphController {
	constructor(model, view, clickHandler) {
		this._model = model;
		this._view = view;
		this.hoverSubject;
		this.clickSubject;
		this.clickHandler = clickHandler;

		select(this._view.canvas)
		.on("click", this.click.bind(this))
		.on("mousemove", this.mousemove.bind(this));
	}

	stop () {
		select(this._view.canvas)
		.on("click", null)
		.on("mousemove", null);
	}

	mousemove () {
		if ( this.getSubject() != this.hoverSubject && typeof this.getSubject()=="object" ){
			this.hoverSubject = this.getSubject();
			this._model.hoverRelations(this.hoverSubject);
		}
		else if(this.getSubject() == null){
			this.hoverSubject = "none";
			this._model.exploredNode = null;
			// this._model.restoreDefault();
		}
	}

	click () {
		if(this.clickSubject == this.getSubject()){
			this.clickSubject = [];
			this._model.restoreDefault();
		}
		else if(this.clickSubject!=this.getSubject() && ( this._model.defaultNodes.indexOf(this.getSubject())!=-1 || this._model.selectedNodes.indexOf(this.getSubject())!=-1 )){
			this.clickSubject = this.getSubject();
			this._model.selectRelations(this.clickSubject, this.clickHandler);
		}
	}

	getSubject () {
		return this._view.simulation.find(mouse(this._view.canvas)[0] - this._view.width/2, mouse(this._view.canvas)[1]- this._view.height/2, 30);
	}
}

module.exports = GraphController;

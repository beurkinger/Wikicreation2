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

	stop(){
		// select(this._view.canvas)
		// .on("click", null)
		// .on("mousemove", null);
	}

	mousemove(){
		if ( this.getSubject() != this.hoverSubject && typeof this.getSubject()=="object" ){
			this.hoverSubject = this.getSubject();
			this._model.hoverRelations(this.hoverSubject);
		}
		else if(this.getSubject() == null){
			this.hoverSubject = "none";
			this._model.exploredNode = null;
			document.getElementsByTagName("canvas")[0].style.cursor="default";
			// this._model.restoreDefault();
		}
	}

	click(){
		if(this.clickSubject == this.getSubject()){
			this.clickSubject = [];
			this.hoverSubject = "none";
			this._model.exploredNode = null;
			this._model.restoreDefault();
		}
		else{
			this.clickSubject = this._model.defaultNodes.concat(this._model.selectedNodes).indexOf(this.getSubject()) == -1 ? this._model.firstNode : this.getSubject() ;
			// this.clickSubject = this.getSubject() || this._model.firstNode;

			this._view.progress = 0;
			this._view.prevCenter = Object.assign({}, this._view.centerOfView);
			// xDIFF = Xtarget - Xorigin
			this._view.centerOfView.x = this._view.width/2 - this.clickSubject.x;
			this._view.centerOfView.y = this._view.height/2 - this.clickSubject.y;

			this._model.selectRelations(this.clickSubject, this.clickHandler);
			if(this.clickSubject == this._model.firstNode){
				this.hoverSubject = "none";
				this._model.exploredNode = null;
				this._model.restoreDefault();
			}
		}
	}

	getSubject(){
		return this._view.simulation.find(mouse(this._view.canvas)[0] - this._view.centerOfView.x, mouse(this._view.canvas)[1]- this._view.centerOfView.y , 60);
	}
}

module.exports = GraphController;

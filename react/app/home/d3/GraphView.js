import AnimLink from './AnimLink';
import AnimNode from './AnimNode';
import {forceManyBody, forceSimulation, forceX, forceY, forceLink, forceCollide} from 'd3-force';

window.requestAnimationFrame = window.requestAnimationFrame ||
window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame;

class GraphView {
	constructor(model, container){
		this._model = model;

		this._model.nodesAdded.attach( this.reheat.bind(this) );
		this._model.linksAdded.attach( this.reheat.bind(this) );

		this.width = container.getBoundingClientRect().width;
		this.height = container.getBoundingClientRect().height;

		this.nodeRadius = 6;

		this.canvas = container.querySelector("canvas"),
		this.context = this.canvas.getContext("2d");

		this.interactionIsClick = false;
		this.interactionHover;

	}

	stop () {
		this.simulation.stop();
	}

	start(){
		var ratio = window.devicePixelRatio || 1;

		this.canvas.style.width = this.width+'px',
		this.canvas.style.height = this.height+'px',
		this.canvas.width = this.width*ratio,
		this.canvas.height = this.height*ratio;

		this.context.scale(ratio,ratio);
		this.context.translate(this.width / 2, this.height / 2);

		this.simulation = forceSimulation(this._model.nodes)
			.force("charge", forceManyBody().strength( d => this._model.setByDepth( d.depth, -300, -300, -300)))
			.force("link", forceLink(this._model.links).distance( d => this._model.setByDepth( d.source.depth, 50, 50)).strength(0.5))
			.force("x", forceX())
			.force("y", forceY())
			.force("collision", forceCollide(d => this._model.setByDepth( d.depth, 60, 60, 60)) )
			.alphaDecay(0.06)
			.on("tick", this.updateView.bind(this));

		this._model.nodes.forEach(d => d.animNode = new AnimNode(d, this));
		this._model.links.forEach(d => d.animLink = new AnimLink(d, this));

		for (var i = 0; i < 10; ++i) this.simulation.tick();
	}

	reheat(){
		this.simulation.alpha( 0.05 ).restart();//ALPHA EST PASSE A 0.05

		this._model.links.forEach( d => {
			if( this._model.selectedLinks.filter( n => d == n ).length == 0) d.animLink.amount = 0 ;
		});
	}

	updateView(){
			this.clearCanvas();
			this.drawLinks();
			this.drawNodes();
	}

	drawNodes(){ //DRAWNODES A ETE MODIFIE
		this._model.nodes.forEach( d => d.animNode.drawNode(true));
		this._model.defaultNodes.forEach( d => d.animNode.drawNode(false));
		this._model.selectedNodes.forEach( d =>  { d.animNode.drawNode(false); d.animNode.drawText();});
		this._model.newNodes.forEach( d => d.animNode.drawNode(false));

		if( this._model.exploredNode != null){

			this._model.exploredNode.animNode.drawNode(false);
			this._model.exploredNode.animNode.drawText();
		}
	}

	drawLinks(){
		this._model.selectedLinks.forEach( d => d.animLink.drawLink() );
		this._model.newLinks.forEach( d =>  d.animLink.drawLink() );
	}

	clearCanvas(){
		this.context.clearRect(-this.width/2, -this.height/2, this.width, this.height);
	}
}

module.exports = GraphView;

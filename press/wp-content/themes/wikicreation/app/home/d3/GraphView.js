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

	start(){
		var ratio = window.devicePixelRatio || 1;

		this.canvas.style.width = this.width+'px',
		this.canvas.style.height = this.height+'px',
		this.canvas.width = this.width*ratio,
		this.canvas.height = this.height*ratio;

		this.context.scale(ratio,ratio);
		this.context.translate(this.width / 2, this.height / 2);

		this.simulation = forceSimulation(this._model.nodes)
			.force("charge", forceManyBody().strength(-800))
			.force("link", forceLink(this._model.links).distance( d => this._model.setByDepth( d.source.depth, 200, 50)).strength(0.5))
			.force("x", forceX())
			.force("y", forceY())
			.force("collision", forceCollide(30) )
			.alphaDecay(0.06)
			.on("tick", this.updateView.bind(this));

		this._model.nodes.forEach(d => d.animNode = new AnimNode(d, this));
		this._model.links.forEach(d => d.animLink = new AnimLink(d, this));

		for (var i = 0; i < 10; ++i) this.simulation.tick();
	}

	stop () {
		this.simulation.stop();
	}

	reheat(){
		if (this.interactionIsClick)	this.simulation.alpha( 0.3 ).restart();
			else this.simulation.alpha(0.1).restart();

		this._model.links.forEach( d => {
			if( this._model.selectedLinks.filter( n => d == n ).length == 0) d.animLink.amount = 0 ;
		});
	}

	updateView(){
			this.clearCanvas();
			this.drawLinks();
			this.drawNodes();
	}

	drawNodes(){

		this._model.permanentNodes.forEach( d => { d.animNode.drawNode(); if(!this.interactionIsClick) d.animNode.drawText();});
		this._model.selectedNodes.forEach( d =>  { d.animNode.drawNode(); d.animNode.drawText();});
		this._model.newNodes.forEach( d => d.animNode.drawNode());
		if(typeof this.interactionHover == "object") this.interactionHover.animNode.drawText();
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

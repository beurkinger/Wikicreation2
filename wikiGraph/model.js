class Model{
	constructor(modelData){
		this.nodes = modelData.nodes;
		this.links = modelData.links;

		this.nodesAdded = new Event(this);
		this.linksAdded = new Event(this);

		this.permanentNodes = this.nodes.filter( d => d.depth<=2 );
		this.selectedNodes = [];
		this.newNodes=[];

		this.selectedLinks = [];
		this.newLinks=[];

	}

	setByDepth(depth, value1, value2, value3){
		switch(depth){
			case 1:
				return value1;
				break;
			case 2:
				return value2;
				break;
			case 3:
				return value3;
				break;
		}
	}

	showLink(subject){
		this.newLinks = this.links.filter( d => d.target.id == subject.id );
		this.linksAdded.notify();
	}

	selectLinks(subject){
		this.selectedLinks = this.links.filter( d => d.target.id == subject.id || d.source.id == subject.id);
		this.linksAdded.notify()
	}

	showNodes(subject){
		this.newNodes = [];

		var theseLinks = this.links.filter( d => d.target.id == subject.id || d.source.id == subject.id);

		theseLinks.forEach( c => {
			this.newNodes.push(this.nodes.filter( d => c.source.id==d.id )[0]);
			this.newNodes.push(this.nodes.filter( d => c.target.id==d.id )[0]);
		});

		this.nodesAdded.notify();
	}

	selectNodes(subject){
		this.selectedNodes = [];

		var theseLinks = this.links.filter( d => d.target.id == subject.id || d.source.id == subject.id);

		theseLinks.forEach( c => {
			this.selectedNodes.push(this.nodes.filter( d => c.source.id==d.id )[0]);
			this.selectedNodes.push(this.nodes.filter( d => c.target.id==d.id )[0]);
		});

		this.nodesAdded.notify();
	}

	addRelatedLinks(subject){
		this.selectedLinks = this.links.filter( d => d.target.id == subject.id || d.source.id == subject.id);
		this.currentLinks = this.selectedLinks;
		/*this.currentLinks = this.currentLinks.concat(this.newLinks);
		this.currentLinks.sort( (a,b) => a.index-b.index ); // trie le tableau en fonction des index de nodes.
		this.currentLinks = this.currentLinks.filter((d, i, self) => !i || d!=self[i - 1] );*/

		this.linksAdded.notify();
	}

	addRelatedNodes(subject){
		this.currentNodes = this.permanentNodes.concat(this.selectedNodes);

		var newNodes = [];


		theseLinks.forEach( c => {
			newNodes.push(this.nodes.filter( d => c.source.id==d.id )[0]);
			newNodes.push(this.nodes.filter( d => c.target.id==d.id )[0]);
		});
		console.log(this.currentLinks);
		this.currentNodes = this.currentNodes.concat(newNodes);
		this.currentNodes.sort( (a,b) => a.index-b.index );
		this.currentNodes = this.currentNodes.filter((d, i, self) => !i || d!=self[i - 1]);

		this.nodesAdded.notify();
	}

	recurseLinksUp(subject){
		var newLinks = links.filter(function(d){ return d.target.id == subject.id });
		upLinks = upLinks.concat(newLinks);
		newLinks.forEach(function(d){
			if(typeof d.source !== 'object' ) return;
			else if(d.source.depth > 1) recurseLinksUp(d.source)
		});
	}

	recurseLinksDown(subject){
		var newLinks = links.filter(function(d){ return d.source.id == subject.id });
		downLinks = downLinks.concat(newLinks);
		newLinks.forEach(function(d){
			if(typeof d.target !== 'object') return;
			else if(d.target.depth < 3) recurseLinksDown(d.target)
		});
	}

}

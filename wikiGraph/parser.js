// modelData will contain the whole list of nodes and links that our graph should have access to.
// viewData corresponds to the currently displayed nodes and links on the graph.

//loads our hierarchy-like data, then executes the callback function
d3.json("http://127.0.0.1/wordpressGraph/wp-content/uploads/2017/01/data2.txt", function(error, data) {
	if (error) throw error;

	var nodes = flatten(data),
		links = setLinks(nodes);

	var initialNode = getNodeByName("création", nodes);

	var modelData = {"nodes":nodes,"links":links},
		viewData = {"nodes":[ initialNode ], "links":[]};

	setTimeout(function(){
		let model = new Model(modelData);
		let view = new View(model);
		let controler = new Controler(model, view);

		view.start();
	},100);

});

// returns every node in the hierarchy structure as a flat list
function flatten(root){
	var nodes = [], i = 0;

	function recurse(node, depth){ // last argument keeps track of the level of depth, in the hierarchy, at which the node is located.
		if (typeof depth == 'number')
        depth++;
    	else depth = 1;

		node.depth = depth;

		if(node.children)
			node.children.forEach( node => recurse(node, depth) );

		node.id = i;
		++i;

		if(depth==1){
			node.fixed = true;
			node.fx = 0;
			node.fy = 0;
		}
		nodes.push(node);
	}
	recurse(root);
	return nodes;
}

// iterates through our list of nodes and return a list of links representing the relationship between parents and children nodes
function setLinks(nodes){
	var links = [], i = 0;

	nodes.forEach(function(node){
		if(node.children){
			node.children.forEach(function(d, n){
					 links.push({"id": i ,"source": node, "target": node.children[n]});
					 ++i;
			});
		}
		else if(node.altParents){
			node.altParents.forEach(function(name){
				links.push({"id": i ,"source": getNodeByName(name, nodes), "target": node});
				++i;
			});
		}
	});

	return links;
}

function getNodeByName(name, nodes){
	return nodes.filter(function(d){ return d.name == name })[0];
}

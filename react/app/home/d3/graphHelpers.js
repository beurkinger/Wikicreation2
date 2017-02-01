// returns every node in the hierarchy structure as a flat list
export function flatten(root){
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
export function setLinks(nodes){
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

//Get a node by its name
export function getNodeByName(name, nodes){
	return nodes.filter(function(d){ return d.name == name })[0];
}

function setAttributes(domElement, attributes){
    for (let attr in attributes){
        domElement.setAttribute(attr, attributes[attr]);
    }
}

function clearNode(node) {
    while(node.hasChildNodes()){
        node.removeChild(node.firstChild);
    }
}

export {setAttributes, clearNode}
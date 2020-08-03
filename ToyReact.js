class ElementWrapper {
    constructor(type){
        this.root  = document.createElement(type)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(vchild){
        vchild.mounTo(this.root);
    }
    mounTo(parent){
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor(content){
        this.root  = document.createTextNode(content)
    }
    mounTo(parent){
        parent.appendChild(this.root)
    }
}

export class Component{
    setAttribute(name,value){
        this[name] = value
    }
    mounTo(parent){
        let vdom = this.render();
        vdom.mounTo(parent)
    }
}

export let ToyReact = {
    createElement(type,attributes,...children){
        let element;
        if(typeof type === "string"){
            element = new ElementWrapper(type)
        }else{
            element = new type
        }
        for(let name in attributes){
            element.setAttribute(name,attributes[name])
        }
        for(let child in children){
            if(typeof child === 'string')
                child =new TextWrapper(child)
            element.appendChild(child)
        }
        return element
    },
    render(vdom,element){
        vdom.mounTo(element)
        // element.appendChild(vdom)
    }
}
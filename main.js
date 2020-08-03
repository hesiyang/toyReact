import {ToyReact,Component} from './ToyReact'

class MyComponent extends Component{
    render(){
        console.log('11212321')
        return <div><span>1</span><span>2</span><span>!</span></div>
    }

}

let a = <MyComponent name="a" id="ida"></MyComponent>

ToyReact.render(a,document.body)

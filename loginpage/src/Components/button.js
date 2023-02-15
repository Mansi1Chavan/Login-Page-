import { Component } from "react";
// import Main from './page1.js';
import './pagee1.css';



class Button extends Component{

//     constructor(props){
//         super(props)
//         this.state = {
//            name: props.name
//         }
//     }
//  loginBtn = () => {
//     this.setState({name: {props.name} })

// }


   render(){
    return(
        <div className="login2">
        <button onClick={this.props.name} type="submit" className="login1">Login</button>
        </div>
    )
   }
}

export default Button;
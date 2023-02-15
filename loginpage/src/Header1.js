
import { Component } from "react";
import Main from './Components/page1.js';
import './Components/pagee1.css';


class Head extends Component {

    constructor() {
        super();

    }

    loginFunction = (e) => {
        <div>
            <Main />
        </div>
    }


    render() {
        return (
            <div className="anchorTag">
               <div> <a href='www.w3schools.com'>Tutorials</a>
                <a href='www.w3schools.com'>References</a>
                <a href='www.w3schools.com'>Exercises</a>
                <a href='www.w3schools.com'>Sign Up</a>
                {/* <i className="fa fa-darkMode"></i> */}
                </div>
                <div>
                <button>Get Certified</button>
                <button>Create Website</button>
                <button onClick={this.loginFunction} className="loginBtn">Login</button>
                </div>
            </div>
        )
    }
}
export default Head;
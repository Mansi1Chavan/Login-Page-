import { Component } from "react";
// import Button from './button.js'
import './pagee1.css';



class Main extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }



    myUserName = (e) => {
        this.setState({ email: e.target.value });
    }

    myPassword = (e) => {
        this.setState({ password: e.target.value });
    }


    render() {
        return (
            <form className="user" onSubmit={this.submitForm}>
                <div className="main" >
                    <h1>Login</h1>
                    <label>Email</label>
                    <input onChange={this.myUserName} placeholder="Type your username" type="email"></input>
                    <label>Password</label>
                    <input onChange={this.myPassword} placeholder="Type your password" type="password"></input>
                    <label className='forgot'>Forgot Password?</label>
                    <div className="btn"><button type="submit" className="login1">Login</button></div>
                    <div>
                        Email: {this.state.email}<br></br>
                        Password: {this.state.password}
                    </div>
                </div>

            </form>
        )

    }
}


export default Main;
import React, {Component} from "react";
import Home from "../home/Home";
import "./Login.css";

class Login extends Component{
    render(){
        return ( 
                <React.Fragment>
                    <Home/>
                        <head>
                            <meta charset="UTF-8"></meta>
                            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                            <title>Document</title>
                        </head>
                        <body>
                            <form class="loginPage">
                                <input type="text" id="uname" placeholder="Username*"></input><br/>
                                <input type="text" id="pwd" placeholder="Password*"></input>
                                <button class="login-btn-1">LOGIN</button>
                                </form>
                        </body>
                </React.Fragment>
         );
    }
}
export default Login;
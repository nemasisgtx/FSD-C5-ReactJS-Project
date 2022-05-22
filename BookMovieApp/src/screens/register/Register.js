import React, {Component} from "react";
import Home from "../home/Home"
import "./Register.css";

class Register extends Component{
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
                                    <form class="registerPage">
                                    <input type="text" id="fname" placeholder="First Name*"></input><br/>
                                    <input type="text" id="lname" placeholder="Last Name*"></input>
                                    <input type="text" id="email" placeholder="Email*"></input>
                                    <input type="text" id="pwd" placeholder="Password*"></input>
                                    <input type="text" id="contact" placeholder="Contact No*"></input>
                                    <button class="register-btn-1">Register</button>
                            </form>
                            </body>
                            </React.Fragment>
         );
    }
}
export default Register;
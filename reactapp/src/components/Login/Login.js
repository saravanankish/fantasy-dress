// eslint-disable-next-line
import React, {Component} from 'react';
import './Login.css';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

var pass = true;

class Login extends Component{

    constructor(props){
        super(props);
        this.props = props;
    }

    state = {
        email: "",
        password: "",
        redirect: false
    }

    emailChange = (e) => {
        this.setState({email: e.target.value});
    }

    passwordChange = (e) => {
        this.setState({password: e.target.value});
    }

    formSubmit = (e) => {
        e.preventDefault();
        // var passHash = require('password-hash');
        // var hashedPass = passHash.generate(this.state.password);
        const data = {
            "email": this.state.email, 
            "password": this.state.password
        }
        if(this.state.email === "admin" && this.state.password === "admin"){
            localStorage.setItem("admin", "true");
            this.props.history.go('/admin');
        }else{
            axios.post(`https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/login`, data).then((res) => {
                if(res.data){
                    localStorage.setItem("user", "true");
                    localStorage.setItem("mail", data['email']);
                    this.setState({redirect: true});
                    this.props.history.go("/home");
                }else{
                    document.querySelector(".warning").style.display = "block";
                }
            })
        }
    }

    showPassword(e){
        if(pass){
            document.querySelector("#password").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            pass = false;
        }else{
            pass = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#password").setAttribute("type", "password");
        }
    }
    
    render(){
        return(
            <div className="has-navbar-fixed-top">
            <nav className="navbar is-warning is-fixed-top is-small" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item h1" id="dressHomeButton">
                    Fantasy Dress
                    </p>
                </div>
            </nav>
            <form className="content-container" onSubmit={this.formSubmit}>
                <div className="form" id="loginBox" data-testid="loginBox">
                    <h1 className="title text is-warning">Login</h1>
                    <p className="warning margin-down">Username or Password is incorrect* </p>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input required className="input" type="text" placeholder="Email" data-testid="email" id="email" onChange={this.emailChange}/>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input required className="input" type="password" data-testid="password" placeholder="Password" id="password" onChange={this.passwordChange}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                            <span className="eye" >
                                <i className="fas fa-eye" onClick={this.showPassword}></i>
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control down">
                            <button className="button is-warning" id="submitButton" data-testid="submitButton">
                            Login
                            </button>
                        </p>
                        <p className="control down">New User? <Link to="/signup" id="signupLink" data-testid="signupLink">click here</Link></p>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default Login;
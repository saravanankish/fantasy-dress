import {Link, withRouter } from 'react-router-dom';
import './Signup.css';
import {Component} from 'react';
import axios from 'axios';

var state = true;
// axios.interceptors.request.use(
//     config => {
//         config.headers.Allow-Control-Allow-Origin = "*"
//     }
// )

class SignUp extends Component{

    state = {
        email: "",
        username: "",
        mobilenumber: "",
        password: "",
        confirmpassword: ""
    }

    emailOnChange = (e) => {
        this.setState({email: e.target.value});
    }

    usernameChange = (e) => {
        this.setState({username: e.target.value});
    }

    mobilenumberChange = (e) => {
        this.setState({mobilenumber: e.target.value});
    }

    passwordChange = (e) => {
        this.setState({password: e.target.value});
    }

    confirmpasswordChange = (e) => {
        this.setState({confirmpassword: e.target.value});
    }

    formClick = (e) => {
        e.preventDefault();
        if(this.state["password"] !== this.state["confirmpassword"]){
            document.querySelector(".warning").style.display = "block";
        }else{
            document.querySelector(".warning").style.display = "none"; 
            // var passHash = require('password-hash');
            // var hashedPass = passHash.generate(this.state.password);
            const data = {
                "email": this.state.email,
                "username": this.state.username,
                "mobileNumber": this.state.mobilenumber,
                "password": this.state.password,
                "role": "user"
            }
            axios.post(`https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/signup`, data).then((res) => {
                if(!res.data){
                    document.querySelector(".margin-down").style.display = "block";
                }else if(res.data){
                    document.querySelector(".margin-down").style.display = "none";
                    document.querySelector(".success").style.display = "block";
                    setTimeout(() => {
                        this.props.history.push("/login");
                    }, 2500);
                }
            })
        }
    }

    showPassword(e){
        if(state){
            document.querySelector("#password").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            state = false;
        }else{
            state = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#password").setAttribute("type", "password");
        }
    }

    showConfirmPassword(e){
        if(state){
            document.querySelector("#confirmpassword").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            state = false;
        }else{
            state = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#confirmpassword").setAttribute("type", "password");
        }
    }

    render() {
        return(
            <div className="has-navbar-fixed-top">
            <nav className="navbar is-warning is-fixed-top is-small" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item h1" id="dressHomeButton">
                    Fantasy Dress
                    </p>
                </div>
            </nav>
            <form className="content-container" onSubmit={this.formClick}>
                <div className="signup-form" id="signupBox" data-testid="signupBox">
                    <h1 className="title text is-warning">Sign Up</h1>
                    <p className="warning margin-down">User already exists. Login to continue</p>
                    <p className="success">User Created Successfully.</p>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input required className="input" type="email" placeholder="Enter Email" id="email" data-testid="email" onChange={this.emailOnChange} />
                            <span className="icon is-small is-left" >
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input required className="input" type="text" placeholder="Enter Username" id="username" data-testid="username" onChange={this.usernameChange}/>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input required className="input" type="tel" placeholder="Enter Mobile Number" id="mobilenumber" data-testid="mobilenumber" pattern="[0-9]{10}" onChange={this.mobilenumberChange}/>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-phone-alt"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input required className="input" type="password" placeholder="Enter Password" id="password" data-testid="password" onChange={this.passwordChange}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                            <span className="eye">
                                <i className="fas fa-eye" onClick={this.showPassword}></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left  has-icons-right">
                            <input required className="input" type="password" placeholder="Confirm Password" id="confirmpassword" data-testid="confirmpassword" onChange={this.confirmpasswordChange}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                            <span className="eye" >
                                <i className="fas fa-eye" onClick={this.showConfirmPassword}></i>
                            </span>
                        </p>
                        <p className="warning">Password do not match<sup>*</sup></p>
                    </div>
                    <div className="field">
                        <p className="control down">
                            <button className="button is-warning" id="submitButton" data-testid="submitButton">
                            Sign Up
                            </button>
                        </p>
                        <p className="control down">Already a member? <Link to="/login" id="signinLink" data-testid="signinLink">click here</Link></p>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default withRouter(SignUp);
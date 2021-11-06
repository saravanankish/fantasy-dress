import './Navbar.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class UserNavbar extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    navbarClick = () => {
        document.querySelector(".navbar-burger").classList.toggle("is-active");
        document.querySelector(".navbar-menu").classList.toggle("is-active");
    }

    buttonClick = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("mail");
        this.props.history.go('/login');
    }

    render(){
        return(
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation" id="userNavbar" data-testid="userNavbar">
            <div className="navbar-brand">
                <p className="navbar-item company" id="dressHomeButton">
                Fantasy-Dress
                </p>

                <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"onClick={this.navbarClick}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <Link to="/home" className="navbar-item" id="dressHomeButton" data-testid="dressHomeButton">
                <i className="fas fa-home"></i>Home
                </Link>

                <Link to="/cart" className="navbar-item" id="dressCartButton" data-testid="dressCartButton">
                <i className="fas fa-cart-plus"></i>Cart
                </Link>

                <Link to="/orders" className="navbar-item" id="dressOrderButton" data-testid="dressOrderButton">
                <i className="fas fa-truck-loading"></i>My Order
                </Link>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button className="button is-danger" id="logoutButton" data-testid="logoutButton" onClick={this.buttonClick}>
                    <i className="fas fa-sign-out-alt"></i>Log out
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
        }
}

export default UserNavbar;
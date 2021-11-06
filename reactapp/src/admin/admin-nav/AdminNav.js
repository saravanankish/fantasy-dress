import './AdminNav.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class AdminNav extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    navbarClick = () => {
        document.querySelector(".navbar-burger").classList.toggle("is-active");
        document.querySelector(".navbar-menu").classList.toggle("is-active");
    }

    buttonClick = () => {
        localStorage.removeItem("admin");
        this.props.history.go('/login');
    }

    render(){
        return(
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation" id="adminNavbar" data-testid="adminNavbar">
            <div className="navbar-brand">
                <p className="navbar-item company" id="dressHomeButton">
                Fantasy Dress
                </p>

                <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.navbarClick}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">

                <Link to="/admin" className="navbar-item" id="adminProductButton" data-testid="adminProductButton">
                <i className="fas fa-shopping-cart"></i>Product
                </Link>

                <Link to="/admin/orders" className="navbar-item" id="adminOrderButton" data-testid="adminOrderButton">
                <i className="fas fa-truck"></i>  Orders
                </Link>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button className="button is-danger" id="logoutButton" data-testid="logoutButton" onClick={this.buttonClick}>
                    <i className="fas fa-sign-out-alt"></i> Log out
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        );
    }
}

export default AdminNav;
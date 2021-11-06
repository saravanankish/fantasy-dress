import { Component } from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css';

class PageNotFound extends Component{
    render(){
        return(
            <div className="container">
                <div>
                    <i className="title has-text-warning fas fa-frown"></i>
                    <h1 className="title has-text-warning">404 Page Not Found</h1>
                    <p>Oops!! Looks like you tried reaching wrong url. Click below to reach Home Page.</p>
                    <Link to="/" className="button is-warning homePageButton">Home Page</Link>
                </div>
            </div>
        )
    }
}

export default PageNotFound;
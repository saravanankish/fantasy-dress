import { Component } from "react";
import AdminNav from './admin-nav/AdminNav';
import './Admin.css';

class Admin  extends Component{
    
    constructor(props){
        super(props);
        this.props = props;
    }

    buttonClick = () => {
        localStorage.removeItem("admin");
        this.props.history.go('/login');
    }

    render() {
        const Inner = this.props.inner;
        const prop = this.props.prop;
        return (
            <div>
                <AdminNav {...this.props} />
                <Inner {...prop} />
            </div>
        );
    }
}

export default Admin;
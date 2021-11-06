import { Component } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/index';
import {withRouter} from 'react-router-dom';

class Home  extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        const prop = this.props.prop;
        const Inner = this.props.inner;
        return (
            <div>
                <Navbar {...this.props}/>
                <Inner {...prop}/>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Home);
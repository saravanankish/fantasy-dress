import { Component } from "react";
import Navbar from '../../home/components/Navbar/Navbar';
import Footer from '../../home/components/Footer/index';
import About from '../../home/pages/about';

class Home  extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        // const prop = this.props.prop;
        // const Inner = this.props.inner;
        return (
            <div>
                <Navbar {...this.props}/>
                <About />
                <Footer />
            </div>
        );
    }
}

export default Home;
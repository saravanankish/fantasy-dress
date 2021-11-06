import { Component } from "react";
import './OrderList.css';
import axios from 'axios';
import config from '../../../config.json';

class OrderList extends Component{
    
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            value: []
        };
    }


    SAFE_componentWillMount(){
        this.getOrders = this.getOrders.bind(this);
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = () => {
        axios.get(config.BACKEND_URL + "/admin/orders").then((res) => {
            this.setState({value: res.data});
        })
    }

    render() {
        return(
            <div id="adminOrderBody" data-testid="adminOrderBody">
                <div>
                    <table className="table is-narrow is-hoverable ">
                        <thead>
                            <tr className="has-background-warning">
                                <th>Order Id</th>
                                <th>User Id</th>
                                <th>Dress Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.value.length === 0? 
                                <tr>
                                    <td>No Orders Yet</td>
                                </tr>:
                                this.state.value.map((item) => 
                                    <tr key={item.orderId}>
                                        <td>{item.orderId}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.totalPrice}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default OrderList;
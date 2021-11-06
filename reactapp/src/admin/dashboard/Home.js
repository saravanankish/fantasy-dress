import React, { Component } from 'react';
import Heading from './Heading.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config.json';

class HomeAdmin extends Component{

        constructor(props){
                super(props);
                this.state = {
                        value: []
                }
        }

        SAFE_componentWillMount() {
                this.getProducts = this.getProducts.bind(this);
        }

        componentDidMount() {
                this.getProducts();
        }

        getProducts = () => {
                axios.get(config.BACKEND_URL + "/admin").then((res) => {
                        this.setState({value: res.data});
                })
        }

        deleteProduct = (e) => {
                axios.get(`${config.BACKEND_URL}/admin/delete/${e.target.classList[e.target.classList.length - 1]}`).then((res) => {
                        if(res.data)
                                this.getProducts();
                })
        }

        render(){
                return(
                        <div className="admin-container" data-testid="adminDashboard">
                                <table className="table is-narrow is-hoverable admin-product-table">
                                        <thead>
                                                <tr className="has-background-warning">
                                                        <th>Image</th>
                                                        <th>Dress Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th></th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {
                                                        this.state.value.length === 0?
                                                        <tr>
                                                                <td>No Products </td>
                                                        </tr>:
                                                        this.state.value.map((item) =>
                                                                <tr key={item.productId}>
                                                                        <td><img className="image" src={item.imageUrl} alt={item.productName}></img></td>
                                                                        <td>{item.productName}</td>
                                                                        <td>Rs. {item.price}</td>
                                                                        <td>{item.quantity}</td>
                                                                        <td>
                                                                                <Link to={{pathname:"/editProduct", state: item.productId}}>
                                                                                        <button className="button btn is-warning">
                                                                                                <i className="fas fa-edit"></i>
                                                                                        </button>
                                                                                </Link>
                                                                                <button className={`button btn is-danger ${item.productId}`} onClick={this.deleteProduct}>
                                                                                        <i className={`fas fa-trash ${item.productId}`}></i>
                                                                                </button>
                                                                        </td>
                                                                </tr>
                                                        )
                                                }
                                        </tbody>
                                </table>
                                <Heading />
                        </div>
                )
        }
}
export default HomeAdmin;
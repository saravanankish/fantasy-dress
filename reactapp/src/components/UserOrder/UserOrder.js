import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  PrtButton
} from '../../home/components/Products/ProductsElements';
import axios from 'axios';
import config from '../../config.json';



class UserOrder extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: []
    }
  }

  SAFE_componentWillMount() {
    this.getOrders = this.getOrders.bind(this);
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    axios.post(config.BACKEND_URL + "/orders", {"id" : localStorage.getItem("mail")}).then((res) => {
      this.setState({value: res.data});
    })
  }

  render(){
    return (
      <ProductsContainer>
        <div className="app">
          <div className="cart" id="dressOrderBody" data-testid="dressOrderBody">
            <div className="cart-list">
            <table className="table is-hoverable cart-table">
              <thead>
                <tr className="has-background-warning">
                  <td className="image-td">Shopping Cart</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total Price</td>
                </tr>
              </thead>
              <tbody>
              {
                this.state.value.length === 0 ?
                  <tr>
                    <td>
                      No Orders
                    </td>
                  </tr>
                  :
                  this.state.value.map(item =>
                    <tr key={item.orderId}>
                      <td className="image-td">
                        <img className="image" src={item.imageUrl} alt="product" />              
                      </td>
                      <td>
                          {item.productName}
                      </td>
                      <td>
                        Rs. {item.price}
                      </td>
                      <td>
                        {item.quantity}
                      </td>
                      <td> 
                        Rs. {item.totalPrice}
                      </td>
                    </tr>
                  )
              }
              {
                this.state.value.length === 0 ?
                <tr>
                  <td>
                    <Link to='/'>
                    <>
                      <PrtButton  >
                        Go For Shopping
                      </PrtButton></></Link>
                      <>
                    </>
                  </td>
                </tr>:
                <tr>
                  
                </tr>
              }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </ProductsContainer>
    )
  }
}

export default UserOrder;
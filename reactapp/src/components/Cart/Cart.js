import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  PrtButton
} from '../../home/components/Products/ProductsElements';
import axios from 'axios';
import config from '../../config.json';



class Cart extends Component {

  constructor(props){
    super(props);
    this.state={
      value: []
    }
  }

  SAFE_componentWillMount() {
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart = () => {
    axios.get(`${config.BACKEND_URL}/cart/${localStorage.getItem("mail")}`).then((res) => {
      this.setState({value: res.data});
    });
  }
 
  deleteCartItem = (e) => {
    var url = config.BACKEND_URL + "/cart/delete";
    axios.post(url, `${e.target.classList[e.target.classList.length - 1]}`).then((res) => {
      if(res.data){
        this.getCart();
      }
    })
  }

  placeOrder = () => {
    axios.post(config.BACKEND_URL + "/saveOrder", {"id": localStorage.getItem("mail")}).then((res) => {
      if(res.data){
        document.querySelector(".info").style.display = "block";
        document.querySelector(".info").style.top = "50px";
        setTimeout(function () {
          document.querySelector(".info").style.display = "none";
          document.querySelector(".info").style.top = "-1000px";
        }, 2500)
      }
      this.getCart();
    })
  }

  render() {
    return (
      <ProductsContainer>
      <div className="app">
        <div className="cart" id="dressCartBody" data-testid="mobileAdminCartBody">
          <div className="cart-list" data-testid="dressCartBody">
            <div className="info has-background-success" >
              <h1><i className="far fa-check-circle" style={{"marginRight":"10px", "fontSize": "22px"}}></i>Order Placed</h1>
            </div>
            <table className="table is-hoverable cart-table">
              <thead>
                <tr className="has-background-warning">
                  <td className="image-td">Shopping Cart</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
              {
                this.state.value.length === 0 ?
                  <tr>
                    <td>
                      Cart is empty
                    </td>
                  </tr>
                  :
                  this.state.value.map(item =>
                    <tr key={item.cartItemId}>
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
                        <button onClick={this.deleteCartItem} className={item.cartItemId} type="button" style={{background:'#e31837',color:'#fff',cursor:'pointer',margin: 10,borderRadius:5}} >        
                          <i className={`fas fa-trash ${item.cartItemId}`}></i>
                        </button>
                      </td>
                    </tr>
                  )
              }
              {
                this.state.value.length === 0 ?
                  <tr style={{display:'flex', alignItems: 'center'}}>
                    <td>
                      <Link to='/'>
                      <>
                      <PrtButton  >
                        Go For Shopping
                      </PrtButton></></Link>
                    </td>
                  </tr>:
              <tr className="cart-action" disabled={this.state.value.length === 0} style={{display:'flex', justifyContent: 'center'}}>
                <td>
                  <h3>
                          Subtotal ({
                  this.state.value.reduce((a, c) => a + parseInt(c.quantity),0)
                  } Items):Rs.
                    
                  {this.state.value.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quantity),0)} 
                  </h3>
                  <div>
                  <PrtButton className="button primary full-width" onClick={this.placeOrder}>
                    Proceed to Checkout
                  </PrtButton>
                  </div>
                </td>
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

export default Cart;
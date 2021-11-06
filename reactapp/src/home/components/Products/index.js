import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import axios from 'axios';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  QuantityContainer
} from './ProductsElements';
import config from '../../../config.json';

class Products extends Component {
  
  constructor({ heading }){
    super();
    this.heading = heading;
    this.state = {
      sort: "asc",
      data: []
    };
  }

  SAFE_componentWillMount() {
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  sortData = () => {
    if(this.state.sort === 'asc'){
      this.state.data.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      })
    }else{
      this.state.data.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      })
    }
  }
  
  getProducts = () => {
    axios.get(`${config.BACKEND_URL}/home`).then((res) => {
      var d = res.data.sort(function(a, b) {
        return parseInt(a.price) - parseInt(b.price);
      })
      this.setState({ data: d });
      this.sortData();
    })
  }

  selectChange = (e) => {
    if(e.target.value === "2") {
      this.setState({sort: "desc"});
    }else{
      this.setState({sort: "asc"});
    }
    this.sortData()
  }

  addToCart = (e) => {
    const url = `${config.BACKEND_URL}/home/${e.target.parentElement.parentElement.id}`
    const addCart = {
      "quantity": document.querySelector(`.p${e.target.parentElement.parentElement.id}`).innerHTML,
      "email": localStorage.getItem("mail")
    }
    axios.post(url, addCart).then((res) => { 
      if(res.data){
        document.querySelector(".info").style.display = "block";
        document.querySelector(".info").style.top = "50px";
      }
      setTimeout(function() {
        document.querySelector(".info").style.display = "none";
        document.querySelector(".info").style.top = "-1000px";
      }, 2500);
    });
  }

  placeOrder = (e) => {
    for(var i = 0; i < this.state.data.length; i++){
      if(this.state.data[i].productId === parseInt(e.target.parentElement.parentElement.id)){
        var temp = this.state.data[i];
        break;
      }
    }
    const order = {
      "userId": localStorage.getItem("mail"),
      "productName": temp.productName,
      "quantity": document.querySelector(`.p${e.target.parentElement.parentElement.id}`).innerHTML,
      "totalPrice": parseInt(temp.price) * parseInt(document.querySelector(`.p${e.target.parentElement.parentElement.id}`).innerHTML),
      "status": "Success",
      "price": temp.price
    }
    axios.post(config.BACKEND_URL + "/placeOrders", order).then((res) => {
      if(res.data){
        document.querySelector(".info-cart").style.display = "block";
        document.querySelector(".info-cart").style.top = "50px";
        setTimeout(function () {
          document.querySelector(".info-cart").style.display = "none";
          document.querySelector(".info-cart").style.top = "-1000px";
        }, 2500);
      }
    })
  }

  increaseQuantity = (e) => {
    var val = document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`);
    val.innerHTML = parseInt(val.innerHTML) + 1;
  }

  decreaseQuantity = (e) => {
    var val = document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`);
    if(val.innerHTML !== "1")
      val.innerHTML = parseInt(val.innerHTML) - 1;
  }
 
  render() {
    return (
      <ProductsContainer>
        <div className="info has-background-success">
          <h1><i className="far fa-check-circle" style={{"marginRight":"10px", "fontSize": "22px"}}></i>Added To Cart</h1>
        </div>
        <div className="info info-cart has-background-success" >
              <h1><i className="far fa-check-circle" style={{"marginRight":"10px", "fontSize": "22px"}}></i>Order Placed</h1>
            </div>
        <ProductsHeading>{this.heading}</ProductsHeading>
        <div className="content-home">
          <div className="control has-icons-left">
            <div className="select is-small">
              <select onChange={this.selectChange}>
                <option defaultValue="1" value="1">Sort: Low to High</option>
                <option value="2">Sort: High to Low</option>
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-sort"></i>
            </div>
          </div>
        </div>
        <ProductWrapper>
          {this.state.data.map((product, index) => {
            return (
              <ProductCard key={index} id={product.productId}>
                <Link to={{pathname:`/product/${product.productId}}`, state: product}}>
                <ProductImg src={product.imageUrl} alt={product.alt}  />
                
                </Link>
                <ProductInfo>
                  <ProductTitle>{product.productName}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPrice>Rs. {product.price}</ProductPrice>
                  <QuantityContainer>
                    <button className="control-btn" onClick={this.decreaseQuantity}><i className="fas fa-minus"></i></button> 
                    <div className={`text-box p${product.productId}`}>1</div>
                    <button className="control-btn" onClick={this.increaseQuantity}><i className="fas fa-plus"></i></button>
                  </QuantityContainer>
                  <ProductButton onClick={this.addToCart}>Add to Cart</ProductButton>
                  <ProductButton onClick={this.placeOrder} >Buy Now</ProductButton>
                  
                </ProductInfo>
                
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
};

export default Products;
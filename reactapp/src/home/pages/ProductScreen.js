import React from 'react'
import {
    ProductsContainer,
    ProductButton,
    QuantityContainer
} from '../components/Products/ProductsElements';
import DetailsThumb from '../components/Products/DetailsThumb';
import axios from 'axios';
import config from '../../config.json';

export default class ProductScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state
        }
    }

    addToCart = (e) => {
        const url = `${config.BACKEND_URL}/home/${this.state.value.productId}`
        const addCart = {
          "quantity": document.querySelector(".quantity").innerHTML,
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
        const order = {
          "userId": localStorage.getItem("mail"),
          "productName": this.state.value.productName,
          "quantity": document.querySelector(".quantity").innerHTML,
          "totalPrice": parseInt(this.state.value.price) * parseInt(document.querySelector(".quantity").innerHTML),
          "Status": "Success",
          "Price": this.state.value.price
        }
        axios.post(config.BACKEND_URL + "/placeOrders", order).then((res) => {
            if(res.data){
                document.querySelector(".info-product").style.display = "block";
                document.querySelector(".info-product").style.top = "50px";
                setTimeout(function () {
                  document.querySelector(".info-product").style.display = "none";
                  document.querySelector(".info-product").style.top = "-1000px";
                }, 2500);
              }
        })
    }

    increaseQuantity = (e) => {
        var val = document.querySelector(".quantity");
        val.innerHTML = parseInt(val.innerHTML) + 1;
      }
    
    decreaseQuantity = (e) => {
    var val = document.querySelector(".quantity");
    if(val.innerHTML !== "1")
        val.innerHTML = parseInt(val.innerHTML) - 1;
    }

    render(){
        return (
        <ProductsContainer>
            <div className="app-product">
                <div className="info has-background-success">
                    <h1><i className="far fa-check-circle" style={{"margin-right":"10px", "font-size": "22px"}}></i>Added To Cart</h1>
                </div>
                <div className="info info-product has-background-success">
                    <h1><i className="far fa-check-circle" style={{"margin-right":"10px", "font-size": "22px"}}></i>Order Placed</h1>
                </div>
                {
                
                    <div className="details" key={this.state.value.productId}>
                        <div className="big-img">
                            <img src={this.state.value.imageUrl} alt={this.state.value.productName}/>
                        </div>

                        <div className="box">
                        <div className="row">
                        <h2>{this.state.value.productName}</h2>
                    
                        <h3>price:{this.state.value.price}</h3>
                        </div>
                    
                    
                        <p>{this.state.value.description}</p>                        

                        <DetailsThumb images={[this.state.value.imageUrl]} tab={this.handleTab} myRef={this.myRef}  />
                        <QuantityContainer>
                            <button className="control-product" onClick={this.decreaseQuantity}><i className="fas fa-minus"></i></button> 
                            <div className="quantity text-box product-text-box">1</div>
                            <button className="control-product" onClick={this.increaseQuantity}><i className="fas fa-plus"></i></button>
                        </QuantityContainer>
                        <ProductButton id="product-btn" onClick={this.addToCart}>Add To Cart</ProductButton>
                        <ProductButton onClick={this.placeOrder}>Buy Now</ProductButton>
                    
                    </div>
                    
                    </div>
                
                }
            </div>
        </ProductsContainer>
        )
    }
}
package com.examly.springapp;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name="cart")
public class CartModel {
    
    // Class Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartItemId;
    private String userId;
    private String ProductName;
    private int Quantity;
    private String Price;

    // No Args Constructor
    public CartModel() {
    }

    // All Args Constructor
    public CartModel(String userId, String ProductName, int Quantity, String Price) {
        this.userId = userId;
        this.ProductName = ProductName;
        this.Quantity = Quantity;
        this.Price = Price;
    }

    // Setters and Getters
    public void setCartItemId(Long cartItemId) {
        this.cartItemId = cartItemId;
    }
    public Long getCartItemId() {
        return cartItemId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }
    public void setProductName(String ProductName) {
        this.ProductName = ProductName;
    }
    public String getProductName() {
        return ProductName;
    }
    public void setQuantity(int Quantity) {
        this.Quantity = Quantity;
    }
    public int getQuantity() {
        return Quantity;
    }
    public void setPrice(String Price) {
        this.Price = Price;
    }
    public String getPrice() {
        return Price;
    }

}

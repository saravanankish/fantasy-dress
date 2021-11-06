package com.examly.springapp;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class UserModel {
    
    // Class Members 
    @Id
    private String email;
    private String username;
    private String password;
    private String mobileNumber;
    private Boolean active;
    private String role;
    @Transient
    private CartModel cart;
    @Transient
    private List<OrderModel> ordersList;

    // No Args Constructor
    public UserModel() {
    }

    // All Args Constructor
    public UserModel(String email, String password, String username, String mobileNumber, Boolean active, String role, CartModel cart, List<OrderModel> ordersList) {
        super();
        this.email = email;
        this.username = username;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.active = active;
        this.role = role;
        this.cart = cart;
        this.ordersList= ordersList;
    }

    // Setters and Getters
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail() {
        return email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    public String getMobileNumber() {
        return mobileNumber;
    }
    public void setActive(Boolean active) {
        this.active = active;
    }
    public Boolean getActive() {
        return active;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getRole() {
        return role;
    }
    public void setCart(CartModel cart) {
        this.cart = cart;
    }
    public CartModel getCart() {
        return cart;
    }
    public void setOrdersList(List<OrderModel> ordersList) {
        this.ordersList= ordersList;
    }
    public List<OrderModel> getOrdersList() {
        return ordersList;
    }

}

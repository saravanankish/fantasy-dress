package com.examly.springapp;

public class OrderTemp {
    
    // Class Variables
    private String ProductName;
    private int quantity;
    private String totalPrice;
    private String Price;
    private String imageUrl;

    // No Args Constructor
    public OrderTemp() {
    }

    // All Args Constructor
    public OrderTemp(String ProductName, int quantity, String totalPrice, String Price, String imageUrl) {
        this.ProductName = ProductName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.Price = Price;
        this.imageUrl = imageUrl;
    }

    // Setters and Getters
    public void setProductName(String ProductName) {
        this.ProductName = ProductName;
    }
    public String getProductName() {
        return ProductName;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
    public String getTotalPrice() {
        return totalPrice;
    }
    public void setPrice(String Price) {
        this.Price = Price;
    }
    public String getPrice() {
        return Price;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getImageUrl() {
        return imageUrl;
    }

}

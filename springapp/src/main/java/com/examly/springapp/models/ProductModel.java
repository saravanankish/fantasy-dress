package com.examly.springapp;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name="product")
public class ProductModel {
    
    // Class Members
    private String productId;
    private String imageUrl;
    @Id
    private String productName;
    private String price;
    private String description;
    private String quantity;

    // No Args Constructor
    public ProductModel() {
    }

    // All Args Constructor
    public ProductModel(String productId, String imageUrl, String productName, String price, String description, String quantity) {
        super();
        this.productId = productId;
        this.imageUrl = imageUrl;
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    // Setters and Getters
    public void setProductId(String productId) {
        this.productId = productId;
    }
    public String getProductId() {
        return productId;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getProductName() {
        return productName;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public String getPrice() {
        return price;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getDescription() {
        return description;
    }
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
    public String getQuantity() {
        return quantity;
    }

}

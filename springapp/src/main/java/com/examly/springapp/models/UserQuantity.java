package com.examly.springapp;

public class UserQuantity {
    
    // Class Members
    private String quantity;
    private String email;

    // No Args Constructor
    public UserQuantity() {
    }

    // All Args Constructor
    public UserQuantity(String quantity, String email) {
        this.quantity = quantity;
        this.email = email;
    }

    // Setters and Getters
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
    public String getQuantity() {
        return quantity;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEmail() {
        return email;
    }
}

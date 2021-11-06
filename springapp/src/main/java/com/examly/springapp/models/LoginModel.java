package com.examly.springapp;

public class LoginModel {
    
    // Class Members
    private String email;
    private String password;

    // No Args Constructor
    public LoginModel(){
    }

    // All Args Constructor
    public LoginModel(String email, String password) {
        super();
        this.email = email;
        this.password = password;
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

}

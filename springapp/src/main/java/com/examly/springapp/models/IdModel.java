package com.examly.springapp;

public class IdModel {
    private String id;

    public IdModel(){

    }

    public IdModel(String id){
        this.id = id;
    }

    public String getId(){
        return this.id;
    }

    public void setId(String id){
        this.id = id;
    }
}

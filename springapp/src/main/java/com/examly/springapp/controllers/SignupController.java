package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class SignupController {
    
    @Autowired
    private UserDao dao;

    @PostMapping("/signup")
    public Boolean saveUser(@RequestBody UserModel user)
    {
        try{
            UserModel new_user = dao.findById(user.getEmail()).get();
            return false;
        }catch(Exception e){}
        dao.save(user);
        return true;
    }

}

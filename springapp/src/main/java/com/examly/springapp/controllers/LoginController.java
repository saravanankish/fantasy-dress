package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class LoginController
{
    @Autowired
    private UserDao dao;
    @PostMapping("/login")
    public Boolean checkUser(@RequestBody LoginModel login)
    {
        try
        {
            UserModel user = dao.findById(login.getEmail()).get();
            if(user.getPassword().equals(login.getPassword()))
                return true;
            return false;
        }

        catch(Exception e)
        {
            return false;
        }
    }
}

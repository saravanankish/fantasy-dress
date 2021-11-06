package com.examly.springapp;

import java.util.*;

import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<UserModel, String>
{
    List<UserModel> findByEmail(String email);
}

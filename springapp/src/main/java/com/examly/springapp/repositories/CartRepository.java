package com.examly.springapp;

import java.util.*;

import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<CartModel, Long> {
    List<CartModel> findByCartItemId(Long cartItemId);
}

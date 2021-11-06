package com.examly.springapp;

import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<OrderModel, String> {
    
}

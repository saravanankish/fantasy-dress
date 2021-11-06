package com.example.demo.repository;

import com.example.model.ProductModel;
import java.util.*;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductModel,String> {
    List<ProductModel> findByProductId(String productId);
    List<ProductModel> findByProductName(String productName);
}

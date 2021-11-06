package com.examly.springapp;
import java.util.*;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductModel,String> {
    List<ProductModel> findByProductId(String productId);
    List<ProductModel> findByProductName(String productName);
}

package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping("/admin")
    public List<ProductModel> getProduct() {
        return productService.getProduct();
    }

    @RequestMapping("/home")
    public List<ProductModel> getHomeProduct() {
        return productService.getHomeProduct();
    }

    @RequestMapping("/admin/productEdit/{id}")
    public ProductModel productEditData(@PathVariable String id) {
        return productService.productEditData(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin/productEdit/{id}")
    public Boolean productEditSave(@RequestBody ProductModel data) {
        return productService.productEditSave(data);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin/addProduct")
    public Boolean productSave(@RequestBody ProductModel data) {
        return productService.productSave(data);
    }

    @RequestMapping("/admin/delete/{id}")
    public Boolean productDelete(@PathVariable String id) {
        return productService.productDelete(id);
    }
}

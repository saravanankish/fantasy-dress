package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;

    // Methods
    public List<OrderModel> getProducts() {

        List<OrderModel> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);

        return orders;

    }
    public List<OrderTemp> getUserProducts(String id) {

        List<OrderModel> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);

        List<OrderTemp> ordersTemp = new ArrayList<>();
        for(OrderModel order:orders) {
            if((order.getUserId()).equals(id)) {
                try {
                    ProductModel product = productRepository.findByProductName(order.getProductName()).get(0);
                    OrderTemp orderTemp = new OrderTemp(order.getProductName(), order.getQuantity(), order.getTotalPrice(), order.getPrice(), product.getImageUrl());
                    ordersTemp.add(orderTemp);
                }
                catch(Exception e) {
                    OrderTemp orderTemp = new OrderTemp(order.getProductName(), order.getQuantity(), order.getTotalPrice(), order.getPrice(), "");
                    ordersTemp.add(orderTemp);
                }
            }
        }

        return ordersTemp;

    }
    public Boolean saveProduct(String id) {
        System.out.println(id);
        List<CartModel> cartItems = new ArrayList<>();
        cartRepository.findAll().forEach(cartItems::add);
        Boolean flag = false;

        for(CartModel cartItem:cartItems) {
            if(cartItem.getUserId().equals(id)) {
                OrderModel order = new OrderModel(id, cartItem.getProductName(), cartItem.getQuantity(), Integer.toString(cartItem.getQuantity()*Integer.parseInt(cartItem.getPrice())), "Success", cartItem.getPrice());
                flag = orderPlaced(order);
            }
        }
        if(flag){
            cartRepository.deleteAll();
            return true;
        }
        return false;

    }
    public Boolean orderPlaced(OrderModel order) {

        try {
            ProductModel product = productRepository.findByProductName(order.getProductName()).get(0);

            if(Integer.parseInt(product.getQuantity()) < order.getQuantity()) {
                System.out.println("quantity");
                return false;
            }

            product.setQuantity(Integer.toString(Integer.parseInt(product.getQuantity())-order.getQuantity()));
            orderRepository.save(order);
            productRepository.save(product);
        }
        catch(Exception e) {
            System.out.println(e);
            return false;
        }

        return true;

    }

}

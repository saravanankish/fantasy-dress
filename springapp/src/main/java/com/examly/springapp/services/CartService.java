package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class CartService {
    
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserDao userRepository;

    // Methods
    public Boolean addToCart(String quantity, String userId, String id) {

        try {

            ProductModel product = productRepository.findByProductId(id).get(0);
            if(Integer.parseInt(quantity)>Integer.parseInt(product.getQuantity()) || userRepository.findByEmail(userId).size()==0) {
                return false;
            }

            CartModel cart = new CartModel(userId, product.getProductName(), Integer.parseInt(quantity), product.getPrice());
            cartRepository.save(cart);
        }
        catch(Exception e) {
            System.out.println(e);
            return false;
        }

        return true;

    }
    public List<CartTempModel> showCart(String id) {

        List<CartModel> cartItems = new ArrayList<>();
        cartRepository.findAll().forEach(cartItems::add);

        List<CartTempModel> cartItemsTemp = new ArrayList<>();
        for(CartModel cartItem:cartItems) {
            if(cartItem.getUserId().equals(id)) {
                ProductModel product = productRepository.findByProductName(cartItem.getProductName()).get(0);
                CartTempModel cartTemp = new CartTempModel(Long.toString(cartItem.getCartItemId()) ,cartItem.getProductName(), cartItem.getQuantity(), cartItem.getPrice(), product.getImageUrl());
                cartItemsTemp.add(cartTemp);
            }
        }

        return cartItemsTemp;
        
    }
    public Boolean deleteCartItem(String id) {
        
        try {
            cartRepository.deleteById(Long.parseLong(id));
        }
        catch(Exception e) {
            System.out.println(e);
            return false;
        }

        return true;

    }
    
}

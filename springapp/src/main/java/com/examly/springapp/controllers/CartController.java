package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class CartController {
    
    @Autowired
    private CartService cartService;

    // Methods
    @RequestMapping(method=RequestMethod.POST, value="/home/{id}")
    public Boolean addToCart(@RequestBody UserQuantity uq, @PathVariable String id) {
        return cartService.addToCart(uq.getQuantity(), uq.getEmail(), id);
    }
    @RequestMapping(method=RequestMethod.GET, value="/cart/{id:.+}")
    public List<CartTempModel> showCart(@PathVariable String id) {
        return cartService.showCart(id);
    }
    @RequestMapping(method=RequestMethod.POST, value="/cart/delete")
    public Boolean deleteCartItem(@RequestBody String id) {
        return cartService.deleteCartItem(id.substring(0, id.length() - 1));
    }
    
}

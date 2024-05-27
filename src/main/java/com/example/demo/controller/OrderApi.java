package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.OrderInfo;
import com.example.demo.service.OrderServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/orders")
public class OrderApi {
	
	@Autowired
	OrderServices service;
	
	@PostMapping("/orderPlaced")
	   public ResponseEntity<String> createOrder(@RequestBody OrderInfo order)
	   {
	      service.saveOrder(order);
	      return ResponseEntity.ok("Order created successfully");
	   }
	
	
	// Endpoint to retrieve all orders

	   @GetMapping("/allOrders")
	   public ResponseEntity<List<OrderInfo>> getAllOrders()
	   {
	      List<OrderInfo> orders = service.getAllOrders();
	      return ResponseEntity.ok(orders);
	   }
	   
	   
	// Endpoint to retrieve an order by ID
	   @GetMapping("/{orderId}")
	   public ResponseEntity<Optional<OrderInfo>> getOrderById(@PathVariable int orderId) {
	       Optional<OrderInfo> order = service.getOrderById(orderId); 
	       if (order != null) {
	           return ResponseEntity.ok(order);
	       } else {
	           return ResponseEntity.notFound().build();
	       }
	   }
	   
	   
	// Endpoint to delete an order by ID
	   @DeleteMapping("/{orderId}")
	   public ResponseEntity<String> deleteOrder(@PathVariable int orderId)
	   {
	      service.deleteOrder(orderId);
	      return ResponseEntity.ok("Order deleted successfully");
	   }
}

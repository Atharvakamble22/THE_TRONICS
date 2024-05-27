package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrderInfo;
import com.example.demo.repo.ServiceRepo;

@Service
public class OrderServices {

	@Autowired
	ServiceRepo repo;
	
	public void saveOrder(OrderInfo order) {
		this.repo.save(order);
		
	}

	public List<OrderInfo> getAllOrders() {
		// TODO Auto-generated method stub
		return this.repo.findAll();
	}

	public Optional<OrderInfo> getOrderById(int orderId) {
		// TODO Auto-generated method stub
		return this.repo.findById(orderId);
	}

	public void deleteOrder(int orderId) {
		this.repo.deleteById(orderId);
		
	}

}

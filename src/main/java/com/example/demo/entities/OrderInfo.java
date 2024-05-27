package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="ordertable")
public class OrderInfo {
	 @Id
	 @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_seq")
	   @SequenceGenerator(name = "order_seq", sequenceName = "ORDERINFO_SEQ", allocationSize = 1)
	   private int oId;

	   private String productName;

	   private String address;
	   private String mobileNo;
	   private double totalPrice;
	   private String paymentMethod;
}

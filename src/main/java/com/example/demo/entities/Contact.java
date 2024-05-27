package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Contact {
   @Id
	 @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contac_seq")
   private int contactId;
   private String name;
   private String email;
   @Column(name="message", length=500)
   private String message;
   private String phoneNo;
   
}

package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Contact;
import com.example.demo.service.ContactService;


@RestController
@CrossOrigin("*")
@RequestMapping("/contactUs")
public class ContactController {
   @Autowired
   ContactService service;

   public ContactController(ContactService service)
   {
      this.service = service;
   }
   
   @PostMapping("/saveComplaints")
   public void saveComplaints(@RequestBody Contact contact)
   {
      service.saveComplaint(contact);
   }
   
   @GetMapping("/getComplaints")
   public Optional<List<Contact>> getAllComplaints()
   {
     return service.getAllComplaints();
     
   }
}

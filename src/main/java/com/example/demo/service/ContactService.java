package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Contact;


public interface ContactService {
   
   void saveComplaint(Contact contact);
   Optional<List<Contact>> getAllComplaints();
}

package com.example.demo.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Contact;
import com.example.demo.repo.ContactRepo;
import com.example.demo.service.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

   @Autowired
   ContactRepo repo;

   public ContactServiceImpl(ContactRepo repo)
   {
      this.repo = repo;
   }

   @Override
   public void saveComplaint(Contact contact)
   {
      this.repo.save(contact);
   }

   @Override
   public Optional<List<Contact>> getAllComplaints()
   {
      return Optional.ofNullable(this.repo.findAll());
   }

}

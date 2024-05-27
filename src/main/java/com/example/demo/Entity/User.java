package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String phoneNumber;
    private String address;
    private String password;
    

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + username + ", email=" + email + 
               ", phoneNumber=" + phoneNumber + ", address=" + address + ", password=" + password + "]";
    }
}

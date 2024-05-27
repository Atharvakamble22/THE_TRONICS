package com.example.demo.userRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);

}

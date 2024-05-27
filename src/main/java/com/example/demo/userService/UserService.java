package com.example.demo.userService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.userRepository.UserRepository;
@Service
public class UserService {
	@Autowired
	private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }
}
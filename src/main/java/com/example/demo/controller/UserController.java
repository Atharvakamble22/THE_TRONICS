package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.userService.UserService;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/login")
    public String loginUser(@RequestParam String username, @RequestParam String password) {
        User user = userService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }
}



package com.abhiram.Inventory_Management.Controller;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.abhiram.Inventory_Management.Model.User;
import com.abhiram.Inventory_Management.Service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {
	@Autowired
    private UserService userService;

    @GetMapping("/get")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/post")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}

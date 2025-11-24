package com.nexe.backend.service;

import com.nexe.backend.Model.User;
import com.nexe.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByDni(String dni) {
        return userRepository.findAll().stream()
                .filter(user -> user.getDni().equals(dni))
                .findFirst()
                .orElse(null);
    }

    public User updateUser(Integer id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setDni(updatedUser.getDni());
            user.setPassword(updatedUser.getPassword());
            user.setRole(updatedUser.getRole());
            user.setName(updatedUser.getName());
            user.setSurname(updatedUser.getSurname());
            user.setContactPhone(updatedUser.getContactPhone());
            user.setEmail(updatedUser.getEmail());
            return userRepository.save(user);
        }).orElse(null);
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}

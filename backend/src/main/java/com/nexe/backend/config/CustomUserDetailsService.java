package com.nexe.backend.config;

import com.nexe.backend.model.User;
import com.nexe.backend.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository repo;

    public CustomUserDetailsService(UserRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String dni) throws UsernameNotFoundException {
        User u = repo.findByDni(dni)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        String role = u.getRole() != null ? "ROLE_" + u.getRole().name() : "ROLE_USER";
        return new org.springframework.security.core.userdetails.User(
                u.getDni(),
                u.getPassword(),
                List.of(new SimpleGrantedAuthority(role))
        );
    }
}
package com.nexe.backend.model;

import jakarta.persistence.*;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;


    @Column(nullable = false, unique = true, length = 15)
    private String dni;


    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role rol;


    private String name;


    private String surname;

    private String phone;

    @Column(unique = true)
    private String email;
}
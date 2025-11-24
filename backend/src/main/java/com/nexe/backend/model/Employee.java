package com.nexe.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEmployee;

    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "idUser")
    private User user;

    private String specialty;
}

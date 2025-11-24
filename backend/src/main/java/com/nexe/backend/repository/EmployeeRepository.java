package com.nexe.backend.repository;

import com.nexe.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    }



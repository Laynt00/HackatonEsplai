package com.nexe.backend.service;

import com.nexe.backend.model.Employee;
import com.nexe.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Optional<Employee> getEmployeeById(Integer id) {
        return employeeRepository.findById(id);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Integer id, Employee employeeDetails) {
        return employeeRepository.findById(id).map(employee -> {
            employee.setUser(employeeDetails.getUser());
            employee.setSpecialty(employeeDetails.getSpecialty());
            return employeeRepository.save(employee);
        }).orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
    }

    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
}
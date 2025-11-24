package com.nexe.backend.controller;

import com.nexe.backend.model.Medication;
import com.nexe.backend.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medications")
public class MedicationController {
    
    @Autowired
    private MedicationService medicationService;
    
    @PostMapping
    public Medication createMedication(@RequestBody Medication medication) { 
        return medicationService.createMedication(medication);
        
    }
    @GetMapping("/{id}")
    public Optional<Medication> getMedicationById(@PathVariable Integer id) {
        return medicationService.getMedicationById(id);
    }
    
    @GetMapping
    public List<Medication> getAllMedications() {
        return medicationService.getAllMedications();
    }
    @PutMapping("/{id}")
    public Medication updateMedication(@PathVariable Integer id, @RequestBody Medication medicationDetails) {
        return medicationService.updateMedication(id, medicationDetails);
    }
    @DeleteMapping("/{id}")
    public void deleteMedication(@PathVariable Integer id) {
        medicationService.deleteMedication(id);
    }
}

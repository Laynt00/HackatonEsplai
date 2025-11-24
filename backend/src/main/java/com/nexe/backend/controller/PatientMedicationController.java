package com.nexe.backend.controller;

import com.nexe.backend.model.PatientMedication;
import com.nexe.backend.service.PatientMedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/patient-medications")
public class PatientMedicationController {

    @Autowired
    private PatientMedicationService patientMedicationService;

    @PostMapping
    public PatientMedication createPatientMedication(@RequestBody PatientMedication patientMedication) {
        return patientMedicationService.createPatientMedication(patientMedication);
    }

    @GetMapping
    public Optional<PatientMedication> getPatientMedicationById(@PathVariable Integer id) {
        return patientMedicationService.getPatientMedicationById(id);
    }

    @GetMapping
    public List<PatientMedication> getAllPatientMedications() {
        return patientMedicationService.getAllPatientMedications();
    }

    @PutMapping
    public PatientMedication updatePatientMedication(@PathVariable Integer id, @RequestBody PatientMedication patientMedicationDetails) {
        return patientMedicationService.updatePatientMedication(id, patientMedicationDetails);
    }

    @DeleteMapping
    public void deletePatientMedication(@PathVariable Integer id) {
        patientMedicationService.deletePatientMedication(id);
    }
    
}

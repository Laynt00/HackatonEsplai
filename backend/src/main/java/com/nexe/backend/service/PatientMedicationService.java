package com.nexe.backend.service;

import com.nexe.backend.model.PatientMedication;
import com.nexe.backend.repository.PatientMedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientMedicationService {

    @Autowired
    private PatientMedicationRepository patientMedicationRepository;

    public PatientMedication createPatientMedication(PatientMedication patientMedication) {
        return patientMedicationRepository.save(patientMedication);
    }

    public Optional<PatientMedication> getPatientMedicationById(Integer id) {
        return patientMedicationRepository.findById(id);
    }

    public List<PatientMedication> getAllPatientMedications() {
        return patientMedicationRepository.findAll();
    }

    public PatientMedication updatePatientMedication(Integer id, PatientMedication patientMedicationDetails) {
        return patientMedicationRepository.findById(id).map(patientMedication -> {
            patientMedication.setPatient(patientMedicationDetails.getPatient());
            patientMedication.setMedication(patientMedicationDetails.getMedication());
            patientMedication.setDosage(patientMedicationDetails.getDosage());
            patientMedication.setAdminMethod(patientMedicationDetails.getAdminMethod());
            return patientMedicationRepository.save(patientMedication);
        }).orElseThrow(() -> new RuntimeException("PatientMedication not found with id " + id));
    }

    public void deletePatientMedication(Integer id) {
       patientMedicationRepository.deleteById(id);
    }
}

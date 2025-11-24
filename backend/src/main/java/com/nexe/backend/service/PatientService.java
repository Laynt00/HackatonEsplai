package com.nexe.backend.service;

import com.nexe.backend.model.Patient;
import com.nexe.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Optional<Patient> getPatientById(Integer id) {
        return patientRepository.findById(id);
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient updatePatient(Integer id, Patient patientDetails) {
        return patientRepository.findById(id).map(patient -> {
            patient.setDni(patientDetails.getDni());
            patient.setName(patientDetails.getName());
            patient.setSurname(patientDetails.getSurname());
            patient.setPathology(patientDetails.getPathology());
            patient.setBirthday(patientDetails.getBirthday());
            return patientRepository.save(patient);
        }).orElseThrow(() -> new RuntimeException("Patient not found with id " + id));
    }

    public void deletePatient(Integer id) {
        patientRepository.deleteById(id);
    }
}

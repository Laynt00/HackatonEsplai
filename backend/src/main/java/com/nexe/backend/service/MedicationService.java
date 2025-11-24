package com.nexe.backend.service;

import com.nexe.backend.model.Medication;
import com.nexe.backend.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public Medication createMedication(Medication medication) {
        return medicationRepository.save(medication);
    }

    public Optional<Medication> getMedicationById(Integer id) {
        return medicationRepository.findById(id);
    }

    public List<Medication> getAllMedications() {
        return medicationRepository.findAll();
    }

    public Medication updateMedication(Integer id, Medication medicationDetails) {
        return medicationRepository.findById(id).map(medication -> {
            medication.setName(medicationDetails.getName());
            medication.setDescription(medicationDetails.getDescription());
            medication.setPresentation(medicationDetails.getPresentation());
            return medicationRepository.save(medication);
        }).orElseThrow(() -> new RuntimeException("Medication not found with id " + id));
    }

    public void deleteMedication(Integer id) {
        medicationRepository.deleteById(id);
    }
}

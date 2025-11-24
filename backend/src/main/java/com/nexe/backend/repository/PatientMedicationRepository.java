package com.nexe.backend.repository;

import com.nexe.backend.model.PatientMedication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientMedicationRepository extends JpaRepository<PatientMedication, Integer> {
}

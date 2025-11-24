package com.nexe.backend.repository;

import com.nexe.backend.model.Patient;
import com.nexe.backend.model.SchedulePatient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SchedulePatientRepository extends JpaRepository<SchedulePatient, Integer> {
    List<Patient> findPatientsBySchedule(Integer idSchedule);
}

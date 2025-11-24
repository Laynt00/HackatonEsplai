package com.nexe.backend.service;

import com.nexe.backend.model.Patient;
import com.nexe.backend.model.SchedulePatient;
import com.nexe.backend.repository.SchedulePatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SchedulePatientService {
    private final SchedulePatientRepository schedulePatientRepository;

    public SchedulePatient createSchedulePatient(SchedulePatient schedulePatient) {
        return schedulePatientRepository.save(schedulePatient);
    }

    public SchedulePatient getSchedulePatientById(Integer id) {
        return schedulePatientRepository.findById(id).orElse(null);
    }

    public List<SchedulePatient> getAllSchedulePatients() {
        return schedulePatientRepository.findAll();
    }

    public List<Patient> getPatientsBySchedule(Integer scheduleId) {
        return schedulePatientRepository.findPatientsBySchedule(scheduleId);
    }

    public SchedulePatient updateSchedulePatient(Integer id, SchedulePatient updatedSchedulePatient) {
        return schedulePatientRepository.findById(id).map(schedulePatient -> {
            schedulePatient.setSchedule(updatedSchedulePatient.getSchedule());
            schedulePatient.setPatient(updatedSchedulePatient.getPatient());
            return schedulePatientRepository.save(schedulePatient);
        }).orElse(null);
    }

    public void deleteSchedulePatient(Integer id) {
        schedulePatientRepository.deleteById(id);
    }
}

package com.nexe.backend.controller;

import com.nexe.backend.model.Patient;
import com.nexe.backend.model.SchedulePatient;
import com.nexe.backend.service.SchedulePatientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/schedule-patients")
public class SchedulePatientController {
    private final SchedulePatientService schedulePatientService;

    @PostMapping
    public SchedulePatient createSchedulePatient(SchedulePatient schedulePatient) {
        return schedulePatientService.createSchedulePatient(schedulePatient);
    }

    @GetMapping
    public List<SchedulePatient> getAllSchedulePatients() {
        return schedulePatientService.getAllSchedulePatients();
    }

    @GetMapping("/{id}")
    public SchedulePatient getSchedulePatientById(Integer id) {
        return schedulePatientService.getSchedulePatientById(id);
    }

    @GetMapping("/schedule/{scheduleId}/patients")
    public List<Patient> getPatientsBySchedule(@PathVariable Integer scheduleId) {
        return schedulePatientService.getPatientsBySchedule(scheduleId);
    }

    @PutMapping("/{id}")
    public SchedulePatient updateSchedulePatient(@PathVariable Integer id, @RequestBody SchedulePatient updatedSchedulePatient) {
        schedulePatientService.updateSchedulePatient(id, updatedSchedulePatient);
        return updatedSchedulePatient;
    }

    @DeleteMapping
    public void deleteSchedulePatient(@PathVariable Integer id) {
        schedulePatientService.deleteSchedulePatient(id);
    }
}

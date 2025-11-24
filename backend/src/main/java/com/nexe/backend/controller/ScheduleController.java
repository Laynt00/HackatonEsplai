package com.nexe.backend.controller;

import com.nexe.backend.Model.Schedule;
import com.nexe.backend.service.ScheduleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/schedules")
@AllArgsConstructor
public class ScheduleController {
    private final ScheduleService scheduleService;

    @PostMapping
    public Schedule createSchedule(Schedule schedule) {
        return scheduleService.createSchedule(schedule);
    }

    @GetMapping
    public List<Schedule> getAllSchedules() {
        return scheduleService.getAllSchedules();
    }

    @GetMapping("/{id}")
    public Schedule getScheduleById(@PathVariable Integer id) {
        return scheduleService.getScheduleById(id);
    }

    @GetMapping("/date/{date}")
    public List<Schedule> getSchedulesByDate(@PathVariable Date date) {
        return scheduleService.getSchedulesByDate(date);
    }

    @GetMapping("/date/{date}/patients")
    public List<Schedule> getSchedulesWithPatientsByDate(@PathVariable Date date) {
        return scheduleService.getSchedulesByDate(date);
    }
    
    @PutMapping("/{id}")
    public Schedule updateSchedule(@PathVariable Integer id, @RequestBody Schedule updatedSchedule) {
        return scheduleService.updateSchedule(id, updatedSchedule);
    }

    @DeleteMapping("/{id}")
    public void deleteSchedule(@PathVariable Integer id) {
        scheduleService.deleteSchedule(id);
    }
}

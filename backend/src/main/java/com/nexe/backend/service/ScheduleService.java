package com.nexe.backend.service;

import com.nexe.backend.model.Schedule;
import com.nexe.backend.repository.ScheduleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Schedule getScheduleById(Integer id) {
        return scheduleRepository.findById(id).orElse(null);
    }

    public List<Schedule> getSchedulesByDate(Date date) {
        return scheduleRepository.findByDate(date);
    }

    public Schedule updateSchedule(Integer id, Schedule updatedSchedule) {
        return scheduleRepository.findById(id).map(schedule -> {
            schedule.setActivity(updatedSchedule.getActivity());
            schedule.setEmployee(updatedSchedule.getEmployee());
            schedule.setTimeStart(updatedSchedule.getTimeStart());
            schedule.setTimeFinish(updatedSchedule.getTimeFinish());
            schedule.setDate(updatedSchedule.getDate());
            return scheduleRepository.save(schedule);
        }).orElse(null);
    }

    public void deleteSchedule(Integer id) {
        scheduleRepository.deleteById(id);
    }
}

package com.nexe.backend.repository;

import com.nexe.backend.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
    List<Schedule> findByDate(Date date);
}

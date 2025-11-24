package com.nexe.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "schedule_patient")
@Builder
public class SchedulePatient {
    private Integer idSchedulePatient;

    @ManyToOne
    @JoinColumn(name="id_patient", nullable=false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name="id_schedule", nullable=false)
    private Schedule schedule;
}

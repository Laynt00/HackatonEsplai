package com.nexe.backend.model;

import jakarta.persistence.*;
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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSchedulePatient;

    @ManyToOne
    @JoinColumn(name="id_patient", nullable=false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name="id_schedule", nullable=false)
    private Schedule schedule;
}

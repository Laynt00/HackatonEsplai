package com.nexe.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "patient_medications")
public class PatientMedication {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer idPatientMedication;

    @OneToOne
    @JoinColumn(name = "id_patient", referencedColumnName = "idPatient")
    private Patient patient;

    @OneToOne
    @JoinColumn(name = "id_medication", referencedColumnName = "idMedication")
    private Medication medication;

    private String dosage;

    private String adminMethod;

    private Date startDate;

    private Date endDate;
}
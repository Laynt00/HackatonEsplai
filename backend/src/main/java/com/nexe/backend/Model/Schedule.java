package com.nexe.backend.Model;
import com.nexe.backend.model.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
@Builder
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSchedule;

    @ManyToOne
    @JoinColumn(name="id_activity", nullable=false)
    private Activity activity;

    @ManyToOne
    @JoinColumn(name="id_employee", nullable=false)
    private Employee employee;

    @Temporal(TemporalType.TIME)
    private Date timeStart;

    @Temporal(TemporalType.TIME)
    private Date timeFinish;

    @Temporal(TemporalType.DATE)
    private Date date;
}

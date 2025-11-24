package com.nexe.backend.controller;

import com.nexe.backend.Model.Activity;
import com.nexe.backend.service.ActivityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activities")
@AllArgsConstructor
public class ActivityController {
    private final ActivityService activityService;

    @PostMapping
    public Activity createActivity(Activity activity) {
        return activityService.createActivity(activity);
    }

    @GetMapping
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable Integer id) {
        return activityService.getActivityById(id);
    }

    @PutMapping("/{id}")
    public Activity updateActivity(@PathVariable Integer id, @RequestBody Activity updatedActivity) {
        return activityService.updateActivity(id, updatedActivity);
    }
}

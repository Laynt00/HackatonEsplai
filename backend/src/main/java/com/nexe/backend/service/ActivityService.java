package com.nexe.backend.service;

import com.nexe.backend.model.Activity;
import com.nexe.backend.repository.ActivityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ActivityService {
    private final ActivityRepository activityRepository;

    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Activity getActivityById(Integer id) {
        return activityRepository.findById(id).orElse(null);
    }

    public Activity updateActivity(Integer id, Activity updatedActivity) {
        return activityRepository.findById(id).map(activity -> {
            activity.setName(updatedActivity.getName());
            return activityRepository.save(activity);
        }).orElse(null);
    }

    public void deleteActivity(Integer id) {
        activityRepository.deleteById(id);
    }
}

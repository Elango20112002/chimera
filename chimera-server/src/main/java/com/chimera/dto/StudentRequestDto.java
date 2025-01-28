package com.chimera.dto;

import com.chimera.model.Course;

import java.util.List;
import java.util.Set;

public class StudentRequestDto {
    private String name;
    private Set<Long> courseIds;
    private Set<Course> mappedCourses;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Long> getCourseIds() {
        return courseIds;
    }

    public void setCourseIds(Set<Long> courseIds) {
        this.courseIds = courseIds;
    }

    public Set<Course> getMappedCourses() {
        return mappedCourses;
    }

    public void setMappedCourses(Set<Course> mappedCourses) {
        this.mappedCourses = mappedCourses;
    }
}


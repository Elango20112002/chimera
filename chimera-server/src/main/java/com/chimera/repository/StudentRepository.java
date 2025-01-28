package com.chimera.repository;

import com.chimera.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;


public interface StudentRepository extends JpaRepository<Student, Long> {
    @Query("SELECT s FROM Student s JOIN FETCH s.courses")
    Set<Student> findAllWithCourses();
}

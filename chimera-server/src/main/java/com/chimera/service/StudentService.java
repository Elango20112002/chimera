package com.chimera.service;


import com.chimera.dto.StudentRequestDto;
import com.chimera.model.Course;
import com.chimera.model.Student;
import com.chimera.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class StudentService {

    @Autowired
    private CourseService courseService;

    @Autowired
    private StudentRepository studentRepository;

    public Set<StudentRequestDto>  getAllStudents() {
        Set<Student> studentList = studentRepository.findAllWithCourses();

        Set<StudentRequestDto> studentRequestDtoSet = studentList.stream().map(
                student -> {
                    StudentRequestDto studentRequestDto = new StudentRequestDto();
                    studentRequestDto.setName(student.getName());
                    studentRequestDto.setMappedCourses(student.getCourses());
                    return studentRequestDto;
                }

        ).collect(Collectors.toSet());
        return studentRequestDtoSet;
    }

    public Student getStudent(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student saveStudent(StudentRequestDto studentRequestDto) {

        Set<Course> courses = new HashSet<>();
        if (studentRequestDto.getCourseIds() != null) {
            for (Long courseId : studentRequestDto.getCourseIds()) {
                Course course = courseService.getCourse(courseId);
                if (course != null) {
                    courses.add(course);
                }
            }
        }

        Student student = new Student();
        student.setName(studentRequestDto.getName());
        student.setCourses(courses);
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}



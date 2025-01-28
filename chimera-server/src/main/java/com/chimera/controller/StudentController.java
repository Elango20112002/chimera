package com.chimera.controller;

import com.chimera.dto.StudentRequestDto;
import com.chimera.model.Course;
import com.chimera.model.Student;
import com.chimera.service.CourseService;
import com.chimera.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*") // Allow requests from frontend
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private CourseService courseService;


    @GetMapping
    public Set<StudentRequestDto>  getAllStudents() {
        return studentService.getAllStudents();
    }


    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudent(id);
    }


    @PostMapping
    public Student createStudent(@RequestBody StudentRequestDto studentRequestDto) {

        return studentService.saveStudent(studentRequestDto);
    }

   // @PutMapping("/{id}")
   // public Student updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
//        Student existingStudent = studentService.getStudent(id);
//        if (existingStudent == null) {
//            return null;
//        }
//        existingStudent.setName(studentDetails.getName());
//
//
//        Set<Course> updatedCourses = new HashSet<>();
//        if (studentDetails.getCourses() != null) {
//            for (Course c : studentDetails.getCourses()) {
//                Course course = courseService.getCourse(c.getId());
//                if (course != null) {
//                    updatedCourses.add(course);
//                }
//            }
//        }
//        existingStudent.setCourses(updatedCourses);
//
//        return studentService.saveStudent(existingStudent);
   // }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}

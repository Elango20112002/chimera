package com.chimera.controller;

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

	// GET all students
	@GetMapping
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	// GET single student by ID
	@GetMapping("/{id}")
	public Student getStudentById(@PathVariable Long id) {
		return studentService.getStudent(id);
	}

	// CREATE student (with courses)
	@PostMapping
	public Student createStudent(@RequestBody Student student) {
		// If the student has courses with IDs, retrieve them from DB
		Set<Course> courses = new HashSet<>();
		if (student.getCourses() != null) {
			for (Course c : student.getCourses()) {
				Course course = courseService.getCourse(c.getId());
				if (course != null) {
					courses.add(course);
				}
			}
		}
		student.setCourses(courses);
		return studentService.saveStudent(student);
	}

	// UPDATE student
	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
		Student existingStudent = studentService.getStudent(id);
		if (existingStudent == null) {
			return null;
		}
		existingStudent.setName(studentDetails.getName());

		// Update courses
		Set<Course> updatedCourses = new HashSet<>();
		if (studentDetails.getCourses() != null) {
			for (Course c : studentDetails.getCourses()) {
				Course course = courseService.getCourse(c.getId());
				if (course != null) {
					updatedCourses.add(course);
				}
			}
		}
		existingStudent.setCourses(updatedCourses);

		return studentService.saveStudent(existingStudent);
	}

	// DELETE student
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable Long id) {
		studentService.deleteStudent(id);
	}
}

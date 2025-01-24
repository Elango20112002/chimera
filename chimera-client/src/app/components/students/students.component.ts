import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';
import { StudentService } from 'src/app/services/Student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  // List of all students
  students: any[] = [];
  // List of all courses (for multi-select)
  allCourses: any[] = [];

  // For adding a new student
  newStudent = {
    name: '',
    courses: [] as number[]
  };
  submitted = false;

  // Current selected student in the list
  currentStudent: any = null;
  currentIndex = -1;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadCourses();
  }

  // Retrieve all students
  loadStudents(): void {
    this.studentService.getAll().subscribe(
      (data: any[]) => {
        this.students = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Retrieve all courses for the dropdown
  loadCourses(): void {
    this.courseService.getAll().subscribe(
      (data: any[]) => {
        this.allCourses = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Save new student
  saveStudent(): void {
    // Convert the selected course IDs into objects if your backend requires:
    const payload = {
      name: this.newStudent.name,
      courses: this.newStudent.courses.map((courseId) => ({ id: courseId }))
    };

    this.studentService.create(payload).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        // Refresh list to show new student
        this.loadStudents();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Reset form for adding another student
  newForm(): void {
    this.submitted = false;
    this.newStudent = {
      name: '',
      courses: []
    };
  }

  // Set selected student in the list
  setActiveStudent(student: any, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }
}

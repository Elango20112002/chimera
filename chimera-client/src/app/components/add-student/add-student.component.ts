import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/services/Student.service';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = {
    name: '',
    courses: [] // will store array of course IDs
  };
  courses: any[] = [];
  submitted = false;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.retrieveCourses();
  }

  retrieveCourses(): void {
    this.courseService.getAll().subscribe(
      data => {
        this.courses = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  saveStudent(): void {
    // student.courses is an array of IDs
    const data = {
      name: this.student.name,
      courses: this.student.courses.map((id: number) => ({ id }))
    };

    this.studentService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      name: '',
      courses: []
    };
  }
}

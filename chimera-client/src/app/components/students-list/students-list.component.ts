import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/services/Student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
})
export class StudentsListComponent implements OnInit {
  students: any[] = []; // Array to hold students
  currentStudent: any = null; // Currently selected student
  currentIndex = -1;
  title = ''; // Search term for filtering

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.retrieveStudents();
  }

  // Retrieve all students
  retrieveStudents(): void {
    this.studentService.getAll().subscribe(
      (data: any[]) => {
        this.students = data; // Assign data to students array
        console.log(data);
      },
      (error) => {
        console.error(error); // Log errors
      }
    );
  }

  // Set the currently selected student
  setActiveStudent(student: any, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }
}

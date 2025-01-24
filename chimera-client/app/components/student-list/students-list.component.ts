import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/Student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: any;
  currentStudent = null;
  currentIndex = -1;
  title = '';

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.retrieveStudents();
  }

  retrieveStudents() {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveStudent(Student, index) {
    this.currentStudent = Student;
    this.currentIndex = index;
  }

  removeAllStudents() {
    this.studentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.studentService.findByTitle(this.title)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/Student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Student-details',
  templateUrl: './Student-details.component.html',
  styleUrls: ['./Student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  currentStudent = null;
  message = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getStudent(this.route.snapshot.paramMap.get('id'));
  }

  getStudent(id) {
    this.studentService.get(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentStudent.title,
      description: this.currentStudent.description,
      published: status
    };

    this.studentService.update(this.currentStudent.id, data)
      .subscribe(
        response => {
          this.currentStudent.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateStudent() {
    this.studentService.update(this.currentStudent.id, this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Student was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteStudent() {
    this.studentService.delete(this.currentStudent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }
}

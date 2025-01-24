import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/Student.service';

@Component({
  selector: 'app-add-Student',
  templateUrl: './add-Student.component.html',
  styleUrls: ['./add-Student.component.css']
})
export class AddStudentComponent implements OnInit {
  Student = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  saveStudent() {
    const data = {
      title: this.Student.title,
      description: this.Student.description
    };

    this.studentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStudent() {
    this.submitted = false;
    this.Student = {
      title: '',
      description: '',
      published: false
    };
  }

}

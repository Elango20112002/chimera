import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html'
})
export class AddCourseComponent implements OnInit {
  course = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {}

  saveCourse(): void {
    const data = {
      title: this.course.title,
      description: this.course.description
    };

    this.courseService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCourse(): void {
    this.submitted = false;
    this.course = {
      title: '',
      description: ''
    };
  }
}

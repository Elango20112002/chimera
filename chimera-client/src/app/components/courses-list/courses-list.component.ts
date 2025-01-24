import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService) { }

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
}

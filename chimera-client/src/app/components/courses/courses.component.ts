import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  coursesList: any[] = [];

  newCourse = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  // Retrieve all courses
  loadCourses(): void {
    this.courseService.getAll().subscribe(
      (data: any[]) => {
        this.coursesList = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Save new course
  saveCourse(): void {
    const payload = {
      title: this.newCourse.title,
      description: this.newCourse.description
    };

    this.courseService.create(payload).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        // Refresh the list to show new course
        this.loadCourses();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Reset form for adding another course
  newForm(): void {
    this.submitted = false;
    this.newCourse = {
      title: '',
      description: ''
    };
  }
}

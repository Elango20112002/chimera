import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';



const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

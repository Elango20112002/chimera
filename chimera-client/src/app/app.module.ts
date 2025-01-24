import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,           
    AddStudentComponent,  
    StudentsListComponent,  
    AddCourseComponent,     
    CoursesListComponent,
    StudentsComponent,
    CoursesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

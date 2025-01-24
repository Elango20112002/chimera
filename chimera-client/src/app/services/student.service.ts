import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  // Get all students
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl); // Explicitly return Observable<any[]>
  }

  // Get a student by ID
  get(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  // Create a new student
  create(data: any): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  // Update a student
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  // Delete a student
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  // Delete all students
  deleteAll(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  // Find students by title
  findByTitle(title: string): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}?title=${title}`);
  }
}

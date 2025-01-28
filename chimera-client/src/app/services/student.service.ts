import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(baseUrl, data);
  }

  
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  
  deleteAll(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  
  findByTitle(title: string): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}?title=${title}`);
  }
}

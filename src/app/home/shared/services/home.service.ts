import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interfaces/student.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  getStudents(): any {
    return this.http.get('https://5f5b1a88044570001674c684.mockapi.io/posts')
  }

  getStaff(): any {
    return this.http.get('https://5f5b1a88044570001674c684.mockapi.io/matches')
  }

  getMemories(): any {
    return this.http.get('https://5f5b1a88044570001674c684.mockapi.io/posts')
  }

  createStudent(newStudent: any) {
    return this.http.post('https://5f5b1a88044570001674c684.mockapi.io/posts', newStudent)
  }

  createStaff(newStaff: any) {
    return this.http.post('https://5f5b1a88044570001674c684.mockapi.io/posts', newStaff)
  }

  createMemory(newMemory: any) {
    return this.http.post('https://5f5b1a88044570001674c684.mockapi.io/posts', newMemory)
  }
}

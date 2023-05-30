import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get('https://5f5b1a88044570001674c684.mockapi.io/posts')
  }
}

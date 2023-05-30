import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../interfaces/student.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Yearbook 2023';
  students: [Student] = [
    {
      id: 1,
      name: 'John Doe',
      linkedin: 'https://www.linkedin.com/in/john-doe/',
      image: 'https://via.placeholder.com/150',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((student: [Student]) => {
      this.students = student;
    })
  }

}

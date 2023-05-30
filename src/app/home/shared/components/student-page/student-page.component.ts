import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
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

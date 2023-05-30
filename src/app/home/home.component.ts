import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Yearbook 2023';
  students: any = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(student => {
      this.students = student;
    })
  }

}

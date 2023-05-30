import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() student: Student = {
    id: 0,
    name: "string",
    program: "string",
    linkedin: "string",
    image: "string",
    caption: "string"
  };

  constructor() { }

  ngOnInit(): void { }

}

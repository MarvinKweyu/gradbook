import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // ToDo: To be replaced with actual year
  year = new Date().getFullYear();
  pageTitle: string = `Yearbook ${this.year}`;

}

import { Component, OnInit } from '@angular/core';
import { Staff } from '../../interfaces/staff.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  staff!: Staff[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.getStaff().subscribe((staff: any) => {
      this.staff = staff;
    });

  }
}

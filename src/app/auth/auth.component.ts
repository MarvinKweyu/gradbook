import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void { }

  submit(): void {
    this.authService.signUp(this.email, this.password);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  role: string = '';

  constructor(private router: Router) {}

  enter() {
    if (this.role) {
      localStorage.setItem('role', this.role);
      this.router.navigate(['/list']);
    }
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tr } from '../../services/tr';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.html'
})
export class Add implements OnInit, OnDestroy {

  formData: any = {};
  role: string = '';

  constructor(private service: Tr, private router: Router) {}

  ngOnInit() {
    this.role = localStorage.getItem('role') || '';

    if (this.role !== 'm') {
      this.router.navigate(['/list']);
    }

    const saved = localStorage.getItem('draft');
    if (saved) {
      this.formData = JSON.parse(saved);
    }
  }

  save(form: any) {
    if (form.valid && this.formData.sd <= this.formData.ed) {
      this.service.add(this.formData);
      localStorage.removeItem('draft');
      this.router.navigate(['/list']);
    }
  }

  ngOnDestroy() {
    localStorage.setItem('draft', JSON.stringify(this.formData));
  }
}
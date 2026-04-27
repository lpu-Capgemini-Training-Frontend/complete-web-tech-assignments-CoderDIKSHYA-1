import { Component, OnInit } from '@angular/core';
import { Tr } from '../../services/tr';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html'
})
export class List implements OnInit {

  trainings: any[] = [];
  role: string = '';

  constructor(private service: Tr, private router: Router) {}

  ngOnInit() {
    this.role = localStorage.getItem('role') || '';

    const all = this.service.get();
    const today = new Date();

    this.trainings = all.filter(t => t.sd && new Date(t.sd) >= today);
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }
}
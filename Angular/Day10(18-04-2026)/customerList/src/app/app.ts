import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customerList');

  customers: Customer[] = [
    { id: 1, name: 'Dikshya', address: 'Jaipur', email: 'a@mail.com', phone: '111', dateOfBirth: new Date(), gender: 'F' },
    { id: 2, name: 'Sanjana', address: 'Himachal', email: 'b@mail.com', phone: '222', dateOfBirth: new Date(), gender: 'F' },
    { id: 3, name: 'Prateek', address: 'Bihar', email: 'c@mail.com', phone: '333', dateOfBirth: new Date(), gender: 'M' },
    { id: 4, name: 'Ashis', address: 'Odisha', email: 'd@mail.com', phone: '444', dateOfBirth: new Date(), gender: 'M' },
    { id: 5, name: 'Kushagra', address: 'UP', email: 'e@mail.com', phone: '555', dateOfBirth: new Date(), gender: 'M' },
    { id: 6, name: 'Satakrutu', address: 'Kolkata', email: 'f@mail.com', phone: '666', dateOfBirth: new Date(), gender: 'M' },
    { id: 7, name: 'Drishti', address: 'Uttar Pradesh', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'F' },
    { id: 8, name: 'Gayatri', address: 'Etawah', email: 'h@mail.com', phone: '888', dateOfBirth: new Date(), gender: 'F' },
    { id: 9, name: 'Ananya', address: 'Bangalore', email: 'i@mail.com', phone: '999', dateOfBirth: new Date(), gender: 'F' },
    { id: 10, name: 'Shubham', address: 'Jharkhand', email: 'j@mail.com', phone: '1000', dateOfBirth: new Date(), gender: 'M' }
  ];

  itemsPerPage = 5;
  currentPage = 1;
  searchText = '';

  get filteredCustomers() {
    return this.customers.filter(c =>
      c.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get paginatedCustomers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCustomers.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredCustomers.length / this.itemsPerPage) || 1;
  }

  onSearchChange() {
    this.currentPage = 1;
  }
}
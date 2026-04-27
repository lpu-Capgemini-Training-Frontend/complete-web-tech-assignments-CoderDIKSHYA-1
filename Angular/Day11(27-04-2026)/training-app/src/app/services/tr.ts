import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Tr {

  list: any[] = [];

  add(data: any) {
    this.list.push(data);
  }

  get() {
    return this.list;
  }
}
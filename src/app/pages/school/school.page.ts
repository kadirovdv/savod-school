import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})
export class SchoolPage {
  constructor() {
    window.scrollTo({
      top: 0,
    });
  }
}

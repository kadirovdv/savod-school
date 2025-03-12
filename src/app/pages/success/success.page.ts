import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage {
  constructor(private router: Router) {
    if (!localStorage.getItem('success')) {
      this.router.navigate(['/form']);
    }
  }
}

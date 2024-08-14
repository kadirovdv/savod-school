import { Component } from '@angular/core';

@Component({
  selector: 'app-send-own-data',
  templateUrl: './send-own-data.html',
  styleUrls: ['./send-own.data.page.scss'],
})
export class SendOwnDataPage {
  disabled = false;
  constructor() {
    if (window.location.pathname.includes('/send')) {
      this.disabled = true;
    }
    
  }
}

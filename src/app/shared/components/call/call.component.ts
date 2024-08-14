import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FacebookPixelService } from '../../services/facebook.pixels.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent {
  @Input() disabled: boolean = false;

  clientName: string = '';
  region: string = '';
  grade: string = '';
  phoneNumber: string = '+998 ';
  error: boolean = false;

  constructor(
    private http: HttpClient,
    private fcbPxlService: FacebookPixelService
  ) {}

  show = false;

  close() {
    setTimeout(() => {
      this.show = false;
    }, 6000);
  }

  sendClientDateToTelegram() {
    if (
      this.clientName.length < 4 ||
      this.region.length === 0 ||
      this.grade.length === 0 ||
      this.phoneNumber.length <= 11
    ) {
      this.error = true;
      this.show = true;
      this.close();
      return;
    }
    this.error = false;
    let msg = `Ism: ${this.clientName}; %0ATuman: ${this.region}; %0ASinf: ${this.grade}; %0ATelefon raqam: ${this.phoneNumber}`;
    this.http
      .get(
        `https://api.telegram.org/bot${environment.botToken}/sendMessage?chat_id=${environment.chat_id}&text=${msg}`
      )
      .subscribe((res) => [this.close(), this.fcbPxlService.pageView()]);
  }
}

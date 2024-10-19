import { Component } from '@angular/core';
import { i18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-arabic',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss'],
})
export class MedicineComponent {
  lang = '';
  constructor(private i18n: i18nService) {
    window.scrollTo(0, 0);

    this.i18n.currentData.subscribe((lang) => {
      this.lang = lang;
    });
  }
}

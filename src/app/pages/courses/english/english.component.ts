import { Component } from '@angular/core';
import { i18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-arabic',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss'],
})
export class EnglishComponent {
  lang = '';
  constructor(private i18n: i18nService) {
    window.scrollTo(0, 0);

    this.i18n.currentData.subscribe((lang) => {
      this.lang = lang;
    });
  }
}

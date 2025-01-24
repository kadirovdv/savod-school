import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { i18nService } from '../../services/i18n.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() whiteNavbar: boolean = false;
  lang = localStorage.getItem('language') || 'uz';
  langDisplay = 'uz';

  constructor(
    private translateService: TranslateService,
    private i18n: i18nService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.i18n.currentData.subscribe((data) => {
      this.langDisplay = data;
    });
  }

  changeLanguage(language: string) {
    this.loaderService.showLoader();

    localStorage.setItem('language', language);
    this.i18n.setLang(language);
    this.translateService.use(language);
    this.loaderService.hideLoader();
  }
}

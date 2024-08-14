import { Component, OnInit } from '@angular/core';
import { ReplainService } from './shared/services/replain.service';
import { TranslateService } from '@ngx-translate/core';
import { FacebookPixelService } from './shared/services/facebook.pixels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private replainSrc: ReplainService,
    private translateService: TranslateService,
    private fcbPxlService: FacebookPixelService
  ) {
    this.replainSrc.loadReplain();
  }

  ngOnInit() {
    if (!localStorage.getItem('lang')?.length) {
      localStorage.setItem('lang', 'uz');
    }
    this.translateService.setDefaultLang('uz');
    this.translateService.use(localStorage.getItem('lang') || 'uz');

    this.fcbPxlService.pageView();
  }
}

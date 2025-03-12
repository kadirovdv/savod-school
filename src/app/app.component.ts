import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScriptLoaderService } from './shared/services/bootstrap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private scriptLoader: ScriptLoaderService,
  ) {}

  ngOnInit() {
    localStorage.removeItem("success");
    this.scriptLoader.loadBootstrapJs();
    if (!localStorage.getItem('language')?.length) {
      localStorage.setItem('language', 'uz');
    }

    this.translateService.setDefaultLang('uz');
    this.translateService.use(localStorage.getItem('language') || 'uz');
  }
}

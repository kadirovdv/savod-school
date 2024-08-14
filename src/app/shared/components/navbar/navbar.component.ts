import { ViewportScroller } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  open: boolean = false;

  lang = localStorage.getItem('lang') || '';
  constructor(
    private router: Router,
    @Inject(LOCALE_ID) public locale: string = 'ru',
    private translateService: TranslateService,
    private viewportScroller: ViewportScroller
  ) {}

  changeLang(lang: string) {
    this.lang = lang;

    localStorage.setItem('lang', this.lang);

    this.translateService.use(this.lang);
  }

  scrollToSection(section: string) {
    // if(section === 'school-price') {
    //   this.router.navigate(['/school']).then(() => {
    //     this.viewportScroller.scrollToAnchor(section);
    //   });
    //   return
    // }
    // this.router.navigate(['/main']).then(() => {
    //   this.viewportScroller.scrollToAnchor(section);
    // });
    window.scrollTo({
      top: 700,
      behavior: 'smooth'
    })
  }
}

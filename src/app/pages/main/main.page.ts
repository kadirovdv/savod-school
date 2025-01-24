import { Component } from '@angular/core';
import { i18nService } from 'src/app/shared/services/i18n.service';
import { SwiperService } from 'src/app/shared/services/swiper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  lang = '';
  constructor(private swiperService: SwiperService, private i18n: i18nService) {
    window.scrollTo(0, 0);
    this.i18n.currentData.subscribe((lang) => {
      this.lang = lang;
    })
  }

  ngAfterViewInit(): void {
    const swiperConfig: any = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 2,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    };
    this.swiperService.initializeSwiper('.mySwiper', swiperConfig);
  }

  setIndex(index: number): void {
    sessionStorage.setItem('index', index.toString());
  }
}

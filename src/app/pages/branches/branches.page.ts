import { Component } from "@angular/core";
import { SwiperService } from "src/app/shared/services/swiper.service";


@Component({
    selector: "app-main",
    templateUrl: "./branches.page.html",
    styleUrls: ["./branches.page.scss"]
})


export class BranchesPage {
    constructor(private swiperService: SwiperService) {
      window.scrollTo(0, 0);
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
}
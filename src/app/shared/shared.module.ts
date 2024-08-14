import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from './components/call/call.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MainPage } from '../pages/main/main.page';
import { AsyncPipe } from '@angular/common';
import {
  LIGHTBOX_CONFIG,
  LightboxConfig,
  LightboxModule,
} from 'ng-gallery/lightbox';
import { TranslateModule } from '@ngx-translate/core';
import { PriceComponent } from './components/price/price.component';
import { SchoolNavbarComponent } from './components/school-navbar/school-navbar.component';
import { SchoolPage } from '../pages/school/school.page';
import { SendOwnDataPage } from '../pages/send-own-data/send-own-data';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    NavbarComponent,
    CallComponent,
    FooterComponent,
    MainPage,
    PriceComponent,
    SchoolPage,
    SchoolNavbarComponent,
    SendOwnDataPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    NgbCarouselModule,
    NgxMaskModule.forRoot(maskConfig),
    LightboxModule,
    TranslateModule,
  ],
  exports: [
    NavbarComponent,
    CallComponent,
    FooterComponent,
    MainPage,
    TranslateModule,
    PriceComponent,
    SchoolPage,
    SchoolNavbarComponent,
    SendOwnDataPage
  ],
})
export class SharedModule {}

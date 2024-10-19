import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { SharedService } from 'src/app/shared/shared.service';
import { MainComponent } from './main/main.component';
import { ArabicComponent } from './arabic/arabic.component';
import { TranslateModule } from '@ngx-translate/core';
import { MedicineComponent } from './nurse/nurse.component';
import { EnglishComponent } from './english/english.component';
import { RussianComponent } from './russian/russian.component';

@NgModule({
  declarations: [
    CoursesComponent,
    MainComponent,
    ArabicComponent,
    MedicineComponent,
    EnglishComponent,
    RussianComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, SharedService, TranslateModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}

//Write module for this file
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { MainComponent } from './main/main.component';
import { ArabicComponent } from './arabic/arabic.component';
import { MedicineComponent } from './nurse/nurse.component';
import { EnglishComponent } from './english/english.component';
import { RussianComponent } from './russian/russian.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses/main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'arabic',
        component: ArabicComponent,
      },
      {
        path: 'medicine',
        component: MedicineComponent
      },
      {
        path: 'english',
        component: EnglishComponent
      },
      {
        path: 'russian',
        component: RussianComponent
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'courses/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}

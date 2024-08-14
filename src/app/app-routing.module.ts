import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { SchoolPage } from './pages/school/school.page';
import { CallComponent } from './shared/components/call/call.component';
import { SendOwnDataPage } from './pages/send-own-data/send-own-data';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainPage,
  },
  {
    path: 'school',
    component: SchoolPage,
  },
  {
    path: 'send-own-data',
    component: SendOwnDataPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

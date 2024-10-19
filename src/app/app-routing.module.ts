import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/page.module').then(m => m.PageModule) },
  { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'form', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

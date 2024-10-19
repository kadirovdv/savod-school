import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main/main.page';
import { BranchesPage } from './branches/branches.page';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainPage },
    { path: 'branches', component: BranchesPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
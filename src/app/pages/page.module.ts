import { NgModule } from '@angular/core';
import { MainPage } from './main/main.page';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedService } from '../shared/shared.service';
import { BranchesPage } from './branches/branches.page';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessPage } from './success/success.page';
@NgModule({
    declarations: [MainPage, BranchesPage, FormComponent, SuccessPage],
    imports: [PagesRoutingModule, SharedService, CommonModule, NgSelectModule, FormsModule, TranslateModule, NgbModule],
    exports: [],
})
export class PageModule {}
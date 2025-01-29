import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaskDirective } from './directives/maks.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MaskDirective],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    TranslateModule,
    FormsModule,
    NgbModule,
  ],
  exports: [NavbarComponent, FooterComponent, MaskDirective],
  providers: [],
})
export class SharedService {}

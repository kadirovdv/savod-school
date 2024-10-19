import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [CommonModule, RouterModule, NgSelectModule, TranslateModule, FormsModule, NgbModule],
    exports: [NavbarComponent, FooterComponent, ],
    providers: [],
})
export class SharedService {}
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { LoaderService } from "../../services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent {
    public showLoader: boolean = false;

    public subscriptions: Subscription[] = [];
 
    constructor(private loaderService: LoaderService) {}
 
    ngOnInit() {
       let subscription = this.loaderService.loader.subscribe(
          (status: boolean) => {
             this.showLoader = status;
          }
       );
 
       this.subscriptions.push(subscription);
    }
}
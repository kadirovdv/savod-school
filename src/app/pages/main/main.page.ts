import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  phoneNumber: string = '+998 ';
  show = false;

  constructor(
    private modalService: NgbModal,
    public translateService: TranslateService
  ) {
    window.scrollTo({
      top: 0,
    });
  }

  @ViewChild('element') section: any = ElementRef;
  @ViewChild('modal') public content: any = ElementRef;

  scroll() {
    this.section.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  closeResult = '';

  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close() {
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 100000);
  }
}

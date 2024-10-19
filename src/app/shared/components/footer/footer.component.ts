import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() headerFooter: boolean = true;
  index = 0;
  selectedCountry = '+998';
  branch = '';
  number = '';
  error = false;
  name = '';
  course = '';
  show = false

  constructor(private api: ApiService, private loaderService: LoaderService) {}

  postMessage() {
    if (
      !this.name.length ||
      !this.branch.length ||
      !this.course.length ||
      !this.number.length
    ) {
      return;
    }
    this.loaderService.showLoader()
    let requestContacts = [
      {
        name: this.name,
        custom_fields_values: [
          {
            field_id: 701591,
            values: [
              {
                value: this.branch,
              },
            ],
          },
          {
            field_id: 646317,
            values: [
              {
                value: `${this.selectedCountry} ${this.number}`,
                enum_code: 'OTHER',
              },
            ],
          },
          {
            field_id: 701589,
            values: [
              {
                value: this.course,
              },
            ],
          },
        ],
      },
    ];

    this.api.createContact(requestContacts).subscribe((res) => {
      const requestLead = [
        {
          name: this.name,
          _embedded: {
            contacts: [
              {
                id: res?._embedded.contacts[0].id,
              },
            ],
          },
        },
      ];
      if (res) {
        this.api.createLead(requestLead).subscribe((res) => {
          // console.log(res);
          this.loaderService.hideLoader()
          this.show = true
        });
      }
    });
  }
}

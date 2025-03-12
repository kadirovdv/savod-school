import { Component, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { SwiperService } from 'src/app/shared/services/swiper.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  name: string = '';
  branch: string = '';
  phone: string = '';
  constructor(
    private router: Router,
    private api: ApiService,
    private loaderService: LoaderService
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    localStorage.removeItem("success");
    document.addEventListener('click', function (event: Event) {
      const dropdown = document.querySelector('.dropdown-custom');
      if (!dropdown?.contains(event.target as Node)) {
        document
          .querySelector('.dropdown-custom-menu')
          ?.classList.remove('show');
        document
          .querySelector('.dropdown-custom-toggle')
          ?.classList.remove('toggled');
      }
    });
  }

  selectOption(option: string) {
    const toggle = document.querySelector(
      '.dropdown-custom-toggle'
    ) as HTMLElement;
    toggle.innerText = option;
    toggle.classList.remove('dropdown-custom-placeholder');
    document.querySelector('.dropdown-custom-menu')?.classList.remove('show');
    toggle.classList.remove('toggled', 'error');
    toggle.classList.add('selected');
  }

  toggleDropdown() {
    document.querySelector('.dropdown-custom-menu')?.classList.toggle('show');
    document
      .querySelector('.dropdown-custom-toggle')
      ?.classList.toggle('toggled');
  }

  phoneMask(input: HTMLInputElement) {
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 2) {
      formattedValue += value.substring(0, 2) + ' ';
      value = value.substring(2);
    }
    if (value.length > 3) {
      formattedValue += value.substring(0, 3) + ' ';
      value = value.substring(3);
    }
    if (value.length > 2) {
      formattedValue += value.substring(0, 2) + ' ';
      value = value.substring(2);
    }
    formattedValue += value;

    input.value = formattedValue;
  }

  validateForm() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    if (!name && !phone && document.querySelector('.selected') === null) {
      document.getElementById('name')?.classList.add('error');
      document.getElementById('phone')?.classList.add('error');
      document.querySelector('.dropdown-custom-toggle')?.classList.add('error');
      return false;
    }

    if (!name && !phone) {
      document.getElementById('name')?.classList.add('error');
      document.getElementById('phone')?.classList.add('error');
      return false;
    }

    if (!phone && document.querySelector('.selected') === null) {
      document.getElementById('phone')?.classList.add('error');
      document.querySelector('.dropdown-custom-toggle')?.classList.add('error');
      return false;
    }

    if (!name) {
      document.getElementById('name')?.classList.add('error');
      return false;
    }
    if (!phone) {
      document.getElementById('phone')?.classList.add('error');
      return false;
    }
    if (document.querySelector('.selected') === null) {
      document.querySelector('.dropdown-custom-toggle')?.classList.add('error');
      return false;
    }
    return true;
  }

  postMessage() {
    this.validateForm();
    if (this.validateForm()) {
      this.loaderService.showLoader();

      let requestContacts = [
        {
          name: (document.getElementById('name') as HTMLInputElement).value,
          custom_fields_values: [
            {
              field_id: 701591,
              values: [
                {
                  value: (document.querySelector('.selected') as HTMLElement)
                    .innerText,
                },
              ],
            },
            {
              field_id: 646317,
              values: [
                {
                  value:
                    '+998 ' +
                    (document.getElementById('phone') as HTMLInputElement)
                      .value,
                  enum_code: 'OTHER',
                },
              ],
            },
            {
              field_id: 701589,
              values: [
                {
                  value: '',
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
            this.loaderService.hideLoader();
            localStorage.setItem("success", "true");
            this.router.navigate(['/success']);
          });
        }
      });
    }
  }
}

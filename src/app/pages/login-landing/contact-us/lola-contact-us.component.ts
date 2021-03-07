import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../@theme/utils/app-validators';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-lola-contact-us',
  templateUrl: './lola-contact-us.component.html',
  styleUrls: ['./lola-contact-us.component.scss']
})
export class LolaContactUsComponent implements OnInit {
  public lat = 40.678178;
  public lng = -73.944158;
  public zoom = 12;
  public contactForm: FormGroup;
  public settings: Settings;
  constructor(public formBuilder: FormBuilder, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:ban-types
  public onContactFormSubmit(values: Object): void {
    if (this.contactForm.valid) {
      console.log(values);
    }
  }

}

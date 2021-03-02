import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { LandingService } from './landing.service';

import { ApiService } from '../../@core/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit  {
  public form: FormGroup;
  public menuItems;
  public settings: Settings;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  registerMode = false;
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
    public appSettings: AppSettings,
    public fb: FormBuilder,
    private landingService: LandingService
  ){
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit(){
    this.menuItems = this.landingService.getMenuItems();
    const crToken = this.cookieService.get('cr-token');
    if (crToken) {
      this.router.navigate(['/pages/xcards']);
    }
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }

  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('cr-token', result.token);
        this.router.navigate(['/pages/xcards']);
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:ban-types
  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }
}

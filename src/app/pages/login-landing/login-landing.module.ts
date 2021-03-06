import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@core/shared/shared.module';
import { CookieService } from 'ngx-cookie-service';

import { AgmCoreModule } from '@agm/core';
import { LoginLandingComponent } from './login-landing.component';

export const routes = [
  { path: '', component: LoginLandingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgmCoreModule,
  ],
  declarations: [
    LoginLandingComponent
  ],
  providers: [
    CookieService
  ]
})
export class LoginLandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@core/shared/shared.module';
import { CookieService } from 'ngx-cookie-service';

import { AgmCoreModule } from '@agm/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NguCarouselModule } from '@ngu/carousel';
import { LoginLandingService } from '../../@core/services/login-landing.service';
import { LoginLandingComponent } from './login-landing.component';
import { LolaFeaturesComponent } from './features/lola-features.component';
import { LolaContactUsComponent } from './contact-us/lola-contact-us.component';
import { LolaMonthlyComponent } from './monthly/lola-monthly.component';
import { LolaOurServicesComponent } from './our-services/lola-our-services.component';
import { LolaOurWorksComponent } from './our-works/lola-our-works.component';
import { LolaPricingComponent } from './pricing/lola-pricing.component';
import { LolaTestimonialsComponent } from './testimonials/lola-testimonials.component';
import { LolaYearlyComponent } from './yearly/lola-yearly.component';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXb37IjmMUz4yczShwPIyEJ69V-QbMLWA'
    }),
    ScrollToModule.forRoot(),
    NguCarouselModule,
  ],
  declarations: [
    LoginLandingComponent,
    LolaFeaturesComponent,
    LolaContactUsComponent,
    LolaMonthlyComponent,
    LolaOurServicesComponent,
    LolaOurWorksComponent,
    LolaPricingComponent,
    LolaTestimonialsComponent,
    LolaYearlyComponent
  ],
  providers: [
    LoginLandingService,
    CookieService
  ]
})
export class LoginLandingModule { }

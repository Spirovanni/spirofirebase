import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@core/shared/shared.module';

import { CookieService } from 'ngx-cookie-service';

import { AgmCoreModule } from '@agm/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NguCarouselModule } from '@ngu/carousel';
import { LandingService } from './landing.service';
import { LandingComponent } from './landing.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { YearlyComponent } from './yearly/yearly.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { FeaturesComponent } from './features/features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgmCoreModule,
    ScrollToModule.forRoot(),
    NguCarouselModule
  ],
  declarations: [
    LandingComponent,
    MonthlyComponent,
    YearlyComponent,
    PricingComponent,
    TestimonialsComponent,
    OurServicesComponent,
    OurWorksComponent,
    FeaturesComponent,
    ContactUsComponent
  ],
  providers: [
    LandingService,
    CookieService
  ]
})
export class LandingModule { }

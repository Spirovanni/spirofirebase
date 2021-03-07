import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { LoginLandingService } from '../../../@core/services/login-landing.service';

@Component({
  selector: 'app-lola-testimonials',
  templateUrl: './lola-testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LolaTestimonialsComponent implements OnInit {
  public testimonials;
  public testimonialsCarouselConfig: NguCarouselConfig;
  public clients;
  public clientsCarouselConfig: NguCarouselConfig;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private landingService: LoginLandingService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.clients = this.landingService.getClients();
    this.testimonials = this.landingService.getTestimonials();
    this.clientsCarouselConfig = {
      grid: {xs: 3, sm: 4, md: 5, lg: 6, all: 0},
      slide: 1,
      speed: 500,
      interval: {
        timing: 4000
      },
      point: {
        visible: false
      },
      loop: true,
      touch: true,
      custom: 'banner',
      RTL: this.settings.rtl
    };
    this.testimonialsCarouselConfig = {
      grid: {xs: 1, sm: 2, md: 3, lg: 3, all: 0},
      slide: 1,
      speed: 500,
      interval: {
        timing: 4000
      },
      point: {
        visible: true
      },
      loop: true,
      touch: true,
      custom: 'banner',
      RTL: this.settings.rtl
    };
  }

}

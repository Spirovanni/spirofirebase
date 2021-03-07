import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { LoginLandingService } from '../../../@core/services/login-landing.service';

@Component({
  selector: 'app-lola-our-works',
  templateUrl: './lola-our-works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LolaOurWorksComponent implements OnInit {
  public works;
  public worksCarouselConfig: NguCarouselConfig;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private landingService: LoginLandingService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.works = this.landingService.getWorks();
    this.worksCarouselConfig = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 400,
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
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginLandingService } from '../login-landing.service';

@Component({
  selector: 'app-features',
  templateUrl: './lola-features.component.html',
  styleUrls: ['./lola-features.component.scss']
})
export class LolaFeaturesComponent implements OnInit {
  public features;
  constructor(private landingService: LoginLandingService) { }

  ngOnInit() {
    this.features = this.landingService.getFeatures();
  }

}

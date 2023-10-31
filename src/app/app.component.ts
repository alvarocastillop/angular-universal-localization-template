import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AnalyticsModule} from "./shared/analytics/analytics.module";
import {AnalyticsService} from "./shared/analytics/services/analytics.service";
import {InternationalizationService} from "./shared/internationalization/services/internationalization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, AnalyticsModule],
})
export class AppComponent implements OnInit {

  public constructor(private analyticsService: AnalyticsService, private internationalizationService: InternationalizationService) {
  }

  public ngOnInit(): void {
    this.analyticsService.init()
    this.internationalizationService.init()
  }

}

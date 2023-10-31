import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AnalyticsModule} from "./shared/analytics/analytics.module";
import {AnalyticsService} from "./shared/analytics/services/analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, AnalyticsModule],
})
export class AppComponent implements OnInit {

  public constructor(private analyticsService: AnalyticsService, private internationalizationService: AnalyticsService) {
  }

  public ngOnInit(): void {
    this.analyticsService.init()
    this.internationalizationService.init()
  }

}

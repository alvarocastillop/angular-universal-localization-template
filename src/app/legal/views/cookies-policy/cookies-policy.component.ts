import { Component } from '@angular/core';
import {environment} from "src/environments/environment";

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent {

  public readonly appName = environment.appName

}

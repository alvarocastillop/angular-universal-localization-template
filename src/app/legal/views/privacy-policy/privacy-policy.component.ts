import { Component } from '@angular/core';
import {environment} from "src/environments/environment";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  public readonly appName = environment.appName

}

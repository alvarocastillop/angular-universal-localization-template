import { Component } from '@angular/core';
import {environment} from "src/environments/environment";

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

  public readonly appName = environment.appName

}

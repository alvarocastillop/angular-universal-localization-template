import { Component } from '@angular/core';
import {environment} from "src/environments/environment";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {

  public addresses = environment.addresses
  public emails = environment.emails
  public phones = environment.phones

}

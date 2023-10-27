import { Component } from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public year: number = new Date().getFullYear()
  public socialNetworks: any[] = [
    { url: 'https://twitter.com', icon: PrimeIcons.TWITTER },
    { url: 'https://facebook.com', icon: PrimeIcons.FACEBOOK },
    { url: 'https://instagram.com', icon: PrimeIcons.INSTAGRAM },
  ]

}

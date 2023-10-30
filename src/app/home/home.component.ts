import {Component, OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {MetaService} from "../shared/meta/services/meta.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
export default class HomeComponent implements OnInit{

  public constructor(private metaService: MetaService) {
  }

  public ngOnInit(): void {
    this.metaService.setTitle('Home | Angular template')
    this.metaService.setDescription('Home page of the Angular template')
  }
}

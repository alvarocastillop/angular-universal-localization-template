import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {

  @Input() title: string | null = null
  @Input() subtitle: string | null = null
  @Input() marginTop: string = '20px'
  @Input() backgroundColor: string = '#F5F5F5'
  @Input() set backgroundImage(value: string) {
    this._backgroundImage = value
  }

  private _backgroundImage: string = ''

  public get backgroundImage(): string {
    return `url(${this._backgroundImage})`
  }
}

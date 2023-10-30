import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent extends BaseCustomFormDirective {

  @Input() public min: number = 0
  @Input() public max: number = Infinity
  @Input() public locale: string = 'en-US';
  @Input() public currency: string = 'USD'
}

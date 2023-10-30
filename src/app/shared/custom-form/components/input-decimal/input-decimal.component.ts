import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-decimal',
  templateUrl: './input-decimal.component.html',
  styleUrls: ['./input-decimal.component.scss']
})
export class InputDecimalComponent extends BaseCustomFormDirective {

  @Input() public min: number = 0
  @Input() public max: number = Infinity
  @Input() public minDecimalPlaces: number = 2;
  @Input() public maxDecimalPlaces: number = 2;
  @Input() public prefix: string = '';
  @Input() public suffix: string = '';
  @Input() public locale: string = 'en-US';
}

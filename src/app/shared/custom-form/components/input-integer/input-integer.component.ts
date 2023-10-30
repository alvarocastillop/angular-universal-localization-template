import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent extends BaseCustomFormDirective {

  @Input() public milesSeparator: boolean = true;
  @Input() public prefix: string = '';
  @Input() public suffix: string = '';
  @Input() public min: number = 0
  @Input() public max: number = Infinity

}

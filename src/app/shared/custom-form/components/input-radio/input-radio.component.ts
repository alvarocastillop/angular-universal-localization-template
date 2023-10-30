import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent extends BaseCustomFormDirective {

  @Input() public options: any[] = []
  @Input() public optionLabel: string = ''
  @Input() public optionValue: string = ''
}

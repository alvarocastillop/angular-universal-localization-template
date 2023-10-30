import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends BaseCustomFormDirective {

  @Input() format: string = 'yy/mm/dd'
  @Input() min: Date = new Date('1970/01/01')
  @Input() max: Date = new Date('2100/12/31')
  @Input() showButtonBar: boolean = true

}

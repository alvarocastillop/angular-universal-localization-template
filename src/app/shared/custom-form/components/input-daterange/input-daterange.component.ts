import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-daterange',
  templateUrl: './input-daterange.component.html',
  styleUrls: ['./input-daterange.component.scss']
})
export class InputDaterangeComponent extends BaseCustomFormDirective {

  @Input() format: string = 'yy/mm/dd'
  @Input() min: Date = new Date('1970/01/01')
  @Input() max: Date = new Date('2100/12/31')
  @Input() showButtonBar: boolean = true

}

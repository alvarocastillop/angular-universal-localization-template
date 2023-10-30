import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-datetime',
  templateUrl: './input-datetime.component.html',
  styleUrls: ['./input-datetime.component.scss']
})
export class InputDatetimeComponent extends BaseCustomFormDirective {

  @Input() format: string = 'yy/mm/dd'
  @Input() min: Date = new Date('1970/01/01 00:00')
  @Input() max: Date = new Date('2100/12/31 23:59')
  @Input() showButtonBar: boolean = true
  @Input() showSeconds: boolean = false

}

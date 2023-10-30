import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-multidropdown',
  templateUrl: './input-multidropdown.component.html',
  styleUrls: ['./input-multidropdown.component.scss']
})
export class InputMultidropdownComponent extends BaseCustomFormDirective {

  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() filter: boolean = true;

}

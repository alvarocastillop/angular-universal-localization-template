import {Component, Input} from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent extends BaseCustomFormDirective {

  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() filter: boolean = true;

}

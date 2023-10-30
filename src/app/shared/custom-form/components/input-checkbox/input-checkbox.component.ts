import { Component } from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends BaseCustomFormDirective {

  public controlName: string = ''

  public override ngOnInit(): void {
    super.ngOnInit();
    this.controlName = this.control?.name?.toString() ?? ''
  }
}

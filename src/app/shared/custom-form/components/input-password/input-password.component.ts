import { Component } from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent extends BaseCustomFormDirective {}

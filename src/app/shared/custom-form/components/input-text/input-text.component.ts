import { Component } from '@angular/core';
import {BaseCustomFormDirective} from "../../directives/base-custom-form.directive";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends BaseCustomFormDirective {}

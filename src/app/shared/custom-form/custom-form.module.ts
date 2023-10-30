import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {ColorPickerModule} from "primeng/colorpicker";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import {RadioButtonModule} from "primeng/radiobutton";
import {TooltipModule} from 'primeng/tooltip';
import {InputCheckboxComponent} from './components/input-checkbox/input-checkbox.component';
import {InputColorpickerComponent} from './components/input-colorpicker/input-colorpicker.component';
import {InputDateComponent} from './components/input-date/input-date.component';
import {InputDaterangeComponent} from './components/input-daterange/input-daterange.component';
import {InputDatetimeComponent} from './components/input-datetime/input-datetime.component';
import {InputDropdownComponent} from './components/input-dropdown/input-dropdown.component';
import {InputEmailComponent} from './components/input-email/input-email.component';
import {InputIntegerComponent} from './components/input-integer/input-integer.component';
import {InputPasswordComponent} from './components/input-password/input-password.component';
import {InputSwitchComponent} from './components/input-switch/input-switch.component';
import {InputTextComponent} from './components/input-text/input-text.component';
import {InputTextareaComponent} from './components/input-textarea/input-textarea.component';
import {BaseCustomFormDirective} from './directives/base-custom-form.directive';
import { InputDecimalComponent } from './components/input-decimal/input-decimal.component';
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import { InputMultidropdownComponent } from './components/input-multidropdown/input-multidropdown.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';


@NgModule({
  declarations: [
    BaseCustomFormDirective,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    InputDateComponent,
    InputDatetimeComponent,
    InputDaterangeComponent,
    InputCheckboxComponent,
    InputColorpickerComponent,
    InputDropdownComponent,
    InputSwitchComponent,
    InputIntegerComponent,
    InputDecimalComponent,
    InputCurrencyComponent,
    InputMultidropdownComponent,
    InputRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    InputSwitchModule,
    InputNumberModule,
    MultiSelectModule,
    RadioButtonModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    InputDateComponent,
    InputDatetimeComponent,
    InputDaterangeComponent,
    InputCheckboxComponent,
    InputColorpickerComponent,
    InputDropdownComponent,
    InputSwitchComponent,
    InputIntegerComponent,
    InputDecimalComponent,
    InputCurrencyComponent,
    InputMultidropdownComponent,
    InputRadioComponent,
  ]
})
export class CustomFormModule {
}

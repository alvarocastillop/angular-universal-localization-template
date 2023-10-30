import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {CustomFormModule} from "../shared/custom-form/custom-form.module";
import {CardContainerComponent} from "../shared/theme/card-container/card-container.component";
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import {routes} from "./contact-routing.module";
import { ContactViewComponent } from './views/contact-view/contact-view.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    ContactInfoComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomFormModule,
    ButtonModule,
    ReactiveFormsModule,
    CardContainerComponent
  ],
  exports: []
})
export class ContactModule { }

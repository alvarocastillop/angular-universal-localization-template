import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {revealAllFormErrors} from "src/app/shared/custom-form/Utils/Utils";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public contactForm: FormGroup
  public loading: boolean = false

  public constructor() {
    this.contactForm = this.initForm()
  }

  public submitForm(): void {
    if (this.contactForm && !this.contactForm.valid) {
      revealAllFormErrors(this.contactForm)
      return
    }

    this.loading = true
  }

  private initForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

}

import {FormGroup} from "@angular/forms";

export const revealAllFormErrors = (formGroup: FormGroup) => {
  Object.values(formGroup.controls).forEach(control => {
    if (control.invalid) {
      control.markAsDirty();
      control.markAsPristine()
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
}

export const resetForm = (formGroup: FormGroup) => {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsUntouched()
  });
  formGroup.reset()
}

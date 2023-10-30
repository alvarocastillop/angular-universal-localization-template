import {FormGroup} from "@angular/forms";

export const revealAllFormErrors = (formGroup: FormGroup) => {
  Object.values(formGroup.controls).forEach(control => {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
}

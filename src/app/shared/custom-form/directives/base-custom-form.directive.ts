import {Directive, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";
import {Subscription} from "rxjs";

@Directive({
  selector: '[appBaseCustomForm]'
})
export class BaseCustomFormDirective implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() label: string = ""
  @Input() placeholder: string = ""
  @Input() required: boolean = true
  @Input() errors: { [value: string]: string } = {}
  @Input() inputIcon: string | null = null
  @Input() tooltip: string | null = null

  public filteredActiveErrors: { [value: string]: string } = {}

  public get value(): any {return this._value}
  public set value(value: any) {this._value = value;}

  public onChange: (data: any) => void = () => {}
  public onTouch: () => void = () => {}
  public isDisabled: boolean = false

  private subscriptions: Subscription = new Subscription()
  private readonly defaultErrorTexts: { [value: string]: string } = {
    required: 'This field is required',
    email: 'Invalid email',
  }
  protected _value: any;

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control) { this.control.valueAccessor = this }
  }

  ngOnInit(): void {
    this.subscribeFormChangesToRevealErrors()
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  public filteredActiveErrorKeys(): string[] {
    return Object.keys(this.filteredActiveErrors)
  }

  private subscribeFormChangesToRevealErrors(): void {
    this.subscriptions.add(
      this.control.valueChanges?.subscribe(() => {
        this.filteredActiveErrors = {}

        for(let controlErrorKey  in this.control.errors) {
          const controlErrorValue = this.control.errors[controlErrorKey]

          if (controlErrorValue && this.control.pristine && this.control.touched) {
            this.filteredActiveErrors[controlErrorKey] = (this.errors[controlErrorKey]) ? this.errors[controlErrorKey] : (this.defaultErrorTexts[controlErrorKey]) ? this.defaultErrorTexts[controlErrorKey] : controlErrorKey
          }
        }
      })
    )
  }

  public changeValue(): void {
    if (this.isDisabled) return
    this.onChange((this.value === 'null') ? null : this.value)
    this.onTouch()
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(obj: any): void {
    this.value = obj
  }
}

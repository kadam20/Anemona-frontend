import { Component } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { RouteEnum } from '@/layout/service/layout.service';

interface IContactFormGroup {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  imports: [
    AnimateOnScroll,
    FormsModule,
    Textarea,
    ReactiveFormsModule,
    InputText,
    FloatLabel,
    Button,
    RouterLink,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactFormGroup: FormGroup;
  formSubmitted: boolean = false;
  routeEnum = RouteEnum;

  constructor() {
    this._createFormGroup();
  }

  isInvalid(controlName: string) {
    const control = this.contactFormGroup.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactFormGroup.valid) {
      this.contactFormGroup.reset();
      this.formSubmitted = false;
    }
  }

  private _createFormGroup(): void {
    // Regex doesn't allow space as the first and last character, but allows: numbers, letters, &, /, \, #, @, (,), and -
    const nameValidator = /^(?! )(?!.* $)[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű0-9&/\\#@\- ()]+$/;
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.contactFormGroup = new FormGroup<IContactFormGroup>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(nameValidator),
        ],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(emailValidator),
        ],
      }),
      message: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(500)],
      }),
    });
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  profileFormData = { firstName: '', lastName: '', email: '', password: '' };

  invalidFirstName = 'Please provide first name';
  invalidLastName = 'Please provide last name';
  invalidEmail = 'Please provide valid email';
  invalidPassword = 'Please provide password';

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit(form: FormGroup) {
    this.profileFormData = form.value;
  }
}

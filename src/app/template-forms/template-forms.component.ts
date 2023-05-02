import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  data = { firstName: '', lastName: '', email: '', password: '' };
  submitted = false;

  invalidFirstName = 'Please provide first name';
  invalidLastName = 'Please provide last name';
  invalidEmail = 'Please provide valid email';
  invalidPassword = 'Please provide password';

  onSubmit() {
    this.submitted = true;
    console.log(this.data);
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {

  constructor(private fb: FormBuilder) {};

  profileFormData= {firstName:"",lastName:"",email:"",password:""};
  profileBuilderData = {firstName:"",lastName:"",email:"",password:""}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  profileBuilder = this.fb.group({
    firstName: ["", Validators.required],
    lastName:["", Validators.required],
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(8)]],
  })

  onSubmit(form: FormGroup) {
    this.profileFormData = form.value;
  }
  onSubmitProfileBuilder(form : FormGroup) {
    console.log('form:', form);
    this.profileBuilderData = form.value;
  } 
}

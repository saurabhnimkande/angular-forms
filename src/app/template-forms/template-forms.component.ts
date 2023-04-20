import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
  carTypes = ["SUV","Seden","Hatchback","Crossover"];
  data= {
    carName:"",
    carBrand:"",
    carType:""
  }
  onSubmit() {
    console.log("submitted")
    console.log(this.data)
  }
} 

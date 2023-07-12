import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm ! :FormGroup

  constructor( private fb:  FormBuilder){

  }

  ngOnInit(){
    this.registerControls()  
  }

  registerControls(){
    this.registerForm = this.fb.group({
      email : [''],
      password : []
    })
  }
}

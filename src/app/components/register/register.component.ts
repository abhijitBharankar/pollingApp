import { Component, Inject, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm ! :FormGroup

  constructor( private fb:  FormBuilder, private fire: FireService){

  }

  ngOnInit(){
    this.registerControls()  
  }

  registerControls(){
    this.registerForm = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  register(){
    this.fire.register(this.registerForm.value.email, this.registerForm.value.password)
  }
}

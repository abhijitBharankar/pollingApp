import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { FireService } from 'src/app/services/fire.service';
import { forwardRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  constructor( private fb: FormBuilder, private fire: FireService){

  }

  ngOnInit(){
    this.loginControls()
  }

  loginControls(){
    this.loginForm = this.fb.group({
      email : [],
      password : []
    })
  }


  login(){
    this.fire.login(this.loginForm.value.email, this.loginForm.value.password)
  }

  signWithGoogle(){
    this.fire.signWithGoogle()
  }
}

import { Inject, Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { forwardRef } from '@angular/core';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class FireService {

  constructor(private fire: AngularFireAuth, private router: Router) { }

  login(email:any, password:any){
    this.fire.signInWithEmailAndPassword(email,password).then(
      ()=>{
        localStorage.setItem('token','true')
        this.router.navigateByUrl('/dashboard')
      }, err =>{
        alert('Something went wrong')
      }
    )
  }


  register(email:any, password:any){
    this.fire.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registration successful')
      this.router.navigateByUrl('/login')
    },err =>{
      alert("something went wrong")
    }
    )
  }

  logout(){
    this.fire.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigateByUrl('/login')
    },err =>{
      alert('Something went wrong')
    })
  }

  signWithGoogle(){
    this.fire.signInWithPopup(new GoogleAuthProvider).then(()=>{
      alert("Logged in suucessfully")
      this.router.navigateByUrl('/dashboard')
      localStorage.setItem('token','true')
    },err =>{
      alert("Something went wrong")
    })
  }
}

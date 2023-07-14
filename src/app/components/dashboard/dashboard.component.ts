import { Component } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private fire: FireService){

  }
  
  logout(){
    this.fire.logout()
  }
}

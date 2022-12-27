import { Component, NgZone, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 
 

  constructor(private authservice:AuthService , private router : Router ,private ngZone : NgZone) { }
 Google():void{
  this.authservice.doGoogleLogin().then(()=>{this.suceessRedirect()})//dogoogle login serveur prédéfinis
  .catch(error=>console.log("error"))//authservice est un service
 }
  suceessRedirect() {
   this.ngZone.run(()=> //ngzone mesh traj3ou ypointi 3el app
   this.router.navigate(['/members']))
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authservive : AuthService,private router : Router){}

  isloggedin:any = false 

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    
    if(this.authservive.getToken() != null)
    {
      this.isloggedin = true
    }  
  }

  logout(){
    this.authservive.removedata()
    // alert("Logout successfully")
    this.isloggedin = false;
    this.router.navigateByUrl("/layout/login")
  }
}

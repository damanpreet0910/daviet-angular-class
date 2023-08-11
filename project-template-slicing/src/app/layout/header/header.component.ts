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

  ngOnInit(): void {
    
  }

  logout(){
    this.authservive.removedata()
    alert("Logout successfully")
    this.router.navigateByUrl("/layout/login")
  }
}

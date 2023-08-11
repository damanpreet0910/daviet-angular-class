import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private authservice : AuthService, private router : Router){}

  useremail : any 
  usertype : any 
  ngOnInit(): void {
    this.useremail = localStorage.getItem('email')
    this.usertype = localStorage.getItem('usertype')
    console.log(this.useremail)
    
  }


}

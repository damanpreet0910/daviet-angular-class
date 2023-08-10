import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerform = {
    name : '',
    email:'',
    password:''
  }

  constructor(private router : Router){}

  ngOnInit(): void {
    
  }

  reg(){
    // console.log(this.registerform)
    this.router.navigateByUrl("/layout/login")
  }
}

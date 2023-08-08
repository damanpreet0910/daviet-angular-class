import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginform = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  constructor(private router : Router){}

  ngOnInit(): void {
    
  }

  submit(){
    // console.log(this.loginform.value)
    if(this.loginform.value.email == "daman@gmail.com" && this.loginform.value.password == "123")
    {
      alert("Login Successfully")
      this.router.navigateByUrl("/layout/home")
    }
    else{
      alert("Invalid email or password")
    }
  }

}

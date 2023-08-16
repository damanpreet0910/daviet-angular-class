import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private router : Router,private authservice : AuthService,private toastr : ToastrService,private spinner : NgxSpinnerService){}

  ngOnInit(): void {
    
  }

  submit(){
    this.spinner.show()
    // console.log(this.loginform.value)
    if(this.loginform.value.email == "daman@gmail.com" && this.loginform.value.password == "123456")
    {
      setTimeout(() => {
        this.spinner.hide()
      }, 3000);
      this.toastr.success("Login Successfully","wow!")
      // alert("Login Successfully")
      this.authservice.setdata(this.loginform.value)
      this.router.navigateByUrl("/layout/home")
    }
    else{
      setTimeout(() => {
        this.spinner.hide()
      }, 3000);
      this.toastr.error("Invalid email or password","oops!")
    }
  }

}

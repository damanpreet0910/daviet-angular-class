import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from '../shared/customer/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginform = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(1)]),
  })

  constructor(private router : Router,private authservice : AuthService,private toastr : ToastrService,private spinner : NgxSpinnerService,private customerservice : CustomerService){}

  ngOnInit(): void {
    
  }

  submit(){
    // this.spinner.show()
    this.customerservice.login(this.loginform.value).subscribe({
      next:(res:any)=>{
        // console.log(res.success)
        if(res.success)
        {
          this.authservice.setdata(res)
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/about")
        }
        else{
          this.toastr.error(res.message)
        }
      },
      error:(err:any)=>{
        this.toastr.error(err)
      }
    })
  }

}

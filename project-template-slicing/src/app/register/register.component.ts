import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/customer/customer.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private router : Router,private customerservice : CustomerService,private toastr : ToastrService,private spinner : NgxSpinnerService){}

  ngOnInit(): void {
    
  }

  reg(){
    this.spinner.show()
    // console.log(this.registerform)
    this.customerservice.add(this.registerform).subscribe({
      next:(result:any)=>{
      this.spinner.hide()

        // console.log(result)
        if(result.success)
        {
          this.toastr.success(result.message)
          this.router.navigateByUrl("/layout/login")
        }
        else{
          this.toastr.error(result.message)
        }
      },
      error:(err:any)=>{
        // console.log(err)
        this.spinner.hide()
        this.toastr.error(err)
      }
    })
  }
}

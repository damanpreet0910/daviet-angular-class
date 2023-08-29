import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/customer/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  registerform = new FormGroup({
    _id: new FormControl(''),
    name : new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  
  constructor(private router : Router,private customerservice : CustomerService,private toastr : ToastrService,private spinner : NgxSpinnerService,private activatedroute : ActivatedRoute){}
  id:any
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("_id")
    this.getsingledata()
  }

  // singleuser : any
  getsingledata(){
    this.spinner.show()
    this.customerservice.getsingle({_id:this.id}).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        this.registerform.patchValue({_id:result.data._id})
        this.registerform.patchValue({name:result.data.name})
        this.registerform.patchValue({email:result.data.email})
        // this.singleuser = result.data
        console.log(result.data)
      },
      error:(err:any)=>{
        this.spinner.hide()
        // console.log(err)
      },
    })
  }

  reg(){
    this.spinner.show()
    // console.log(this.registerform)
    this.customerservice.update(this.registerform.value).subscribe({
      next:(result:any)=>{
      this.spinner.hide()

        // console.log(result)
        if(result.success)
        {
          this.toastr.success(result.message)
          this.router.navigateByUrl("/layout/manage-customer")
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

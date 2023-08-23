import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'src/app/shared/customer/customer.service';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit{
  _id:any
  constructor(private customerservice : CustomerService,private spinner : NgxSpinnerService,private activatedroute : ActivatedRoute){}
  
  ngOnInit(): void {
    this._id = this.activatedroute.snapshot.paramMap.get("_id")
    this.getsingledata()
  }

  singleuser : any
  getsingledata(){
    this.spinner.show()
    this.customerservice.getsingle({_id:this._id}).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        this.singleuser = result.data
        console.log(this.singleuser)
      },
      error:(err:any)=>{
        this.spinner.hide()
        // console.log(err)
      },
    })
  }
}

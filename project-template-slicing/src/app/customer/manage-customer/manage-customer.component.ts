import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'src/app/shared/customer/customer.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  constructor(private customerservice : CustomerService,private spinner : NgxSpinnerService){}
  
  ngOnInit(): void {
      this.getalldata()
  }

  alldata : any
  getalldata(){
    this.spinner.show()
    this.customerservice.getall({}).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        this.alldata = result.data
        console.log(this.alldata)
      },
      error:(err:any)=>{
        this.spinner.hide()
        // console.log(err)
      },
    })
  }
}

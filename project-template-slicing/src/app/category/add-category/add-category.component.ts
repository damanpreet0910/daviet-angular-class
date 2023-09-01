import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  categoryform = new FormGroup({
    name : new FormControl(""),
    category_image:new FormControl("")
  })

  constructor(private router : Router,private categoryservice : CategoryService,private toastr : ToastrService,private spinner : NgxSpinnerService){}

  ngOnInit(): void {
    
  }
  upload(event:any){
    // console.log(event.target.files[0])
    this.categoryform.patchValue({category_image:event.target.files[0]})
  }
  cname : any
  cimg : any
  submit(){
    this.spinner.show()
    this.cname = this.categoryform.value.name
    this.cimg = this.categoryform.value.category_image

    // console.log(this.categoryform.value)
    let data = new FormData()
    data.append('name' , this.cname);
    data.append('category_image' ,  this.cimg);

    this.categoryservice.add(data).subscribe({
      next:(result:any)=>{
      this.spinner.hide()

        // console.log(result)
        if(result.success)
        {
          this.toastr.success(result.message)
          this.router.navigateByUrl("/layout/manage-category")
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


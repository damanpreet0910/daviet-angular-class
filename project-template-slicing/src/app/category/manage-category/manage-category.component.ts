import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/shared/category/category.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  imgurl : any
  constructor(private categorservice: CategoryService, private spinner: NgxSpinnerService,private dom : DomSanitizer,@Inject("imageurl") _imageurl:any) { 
    this.imgurl = _imageurl
  }

  ngOnInit(): void {
    this.getalldata()
    // console.log(this.imgurl)
  }

  combineurl(imagepath : any){
    return this.dom.bypassSecurityTrustResourceUrl(this.imgurl+imagepath)
  }

  alldata: any
  getalldata() {
    this.spinner.show()
    this.categorservice.getall({}).subscribe({
      next: (result: any) => {
        this.spinner.hide()
        this.alldata = result.data
        console.log(this.alldata)
      },
      error: (err: any) => {
        this.spinner.hide()
        // console.log(err)
      },
    })
  }

  changestatus(_id: any, status: any) {



    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.categorservice.update({ _id: _id, status: status }).subscribe({
          next: (result: any) => {
            this.spinner.hide()
            console.log(result)
            this.getalldata()
            Swal.fire(
              'Blocked!',
              'Your file has been deleted.',
              'success'
            )
          },
          error: (err: any) => {
            this.spinner.hide()
            // console.log(err)
          },
        })
      }
    })
  }
}

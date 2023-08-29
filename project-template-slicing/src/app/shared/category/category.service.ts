import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseurl : any
  token : any
  
  constructor(private http : HttpClient,@Inject("baseurl") _baseurl:any,private authservice : AuthService) {
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }

  getall(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+"category/all",form,{headers : header_object})
  }

  update(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    // console.log(form)
    return this.http.post(this.baseurl+"category/update",form,{headers : header_object})
  }


}

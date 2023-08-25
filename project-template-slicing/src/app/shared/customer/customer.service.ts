import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseurl : any
  token : any
  
  constructor(private http : HttpClient,@Inject("baseurl") _baseurl:any,private authservice : AuthService) {
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }

  add(form:any){
    return this.http.post(this.baseurl+"user/add",form)
  }

  login(form:any){
    return this.http.post(this.baseurl+"user/login",form)
  }
  
  getall(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+"user/all",form,{headers : header_object})
  }

  getsingle(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+"user/single",form,{headers : header_object})
  }

  update(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    // console.log(form)
    return this.http.post(this.baseurl+"user/update",form,{headers : header_object})
  }


}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseurl : any
  
  constructor(private http : HttpClient,@Inject("baseurl") _baseurl:any) {
    this.baseurl = _baseurl
  }

  add(form:any){
    return this.http.post(this.baseurl+"user/add",form)
  }

  login(form:any){
    return this.http.post(this.baseurl+"user/login",form)
  }
  

}

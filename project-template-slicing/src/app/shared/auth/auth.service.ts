import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setdata(formdata:any){
    // console.log(formdata)
    sessionStorage.setItem('email',formdata.email)
    sessionStorage.setItem('usertype','customer')
  }

  getEmail()
  {
    return sessionStorage.getItem("email")
  }

  getUserType()
  {
    return sessionStorage.getItem("usertype")
  }

  removedata(){
    // sessionStorage.removeItem("email");
    // sessionStorage.removeItem("usertype");
    sessionStorage.clear();
  }
}

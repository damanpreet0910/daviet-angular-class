import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setdata(res:any){
    // console.log(formdata)
    localStorage.setItem('email',res.data.email)
    localStorage.setItem('token',res.token)
  }

  getEmail()
  {
    return localStorage.getItem("email")
  }

  getToken()
  {
    return localStorage.getItem("token")
  }

  removedata(){
    localStorage.clear();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './authguard/auth.guard';
import { ManageCustomerComponent } from './customer/manage-customer/manage-customer.component';
import { SingleCustomerComponent } from './customer/single-customer/single-customer.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/home',pathMatch:'full'
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent,canActivate:[AuthGuard]
      },
      {
        path:'about',component:AboutComponent,canActivate:[AuthGuard]
      },
      {
        path:'login',component : LoginComponent
      },
      {
        path:'register',component : RegisterComponent
      },
      {
        path:'manage-customer',component:ManageCustomerComponent,canActivate:[AuthGuard]
      },
      {
        path:'single-customer/:_id',component:SingleCustomerComponent,canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';

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
      },
      {
        path:'update-customer/:_id',component:UpdateCustomerComponent,canActivate:[AuthGuard]
      },
      {
        path:'add-category',component:AddCategoryComponent,canActivate:[AuthGuard]
      },
      {
        path:'manage-category',component:ManageCategoryComponent,canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

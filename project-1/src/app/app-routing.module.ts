import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PersonalInfoComponent } from './portfolio/personal-info/personal-info.component';
import { EducationalQualificationComponent } from './portfolio/educational-qualification/educational-qualification.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/first-page',pathMatch:'full'
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'first-page',component:HomeComponent
      },
      {
        path:'about-us',component:AboutComponent
      },
      {
        path:'contact-us',component:ContactComponent
      },
      {
        path:'add-category',component:AddCategoryComponent
      },
      {
        path:'manage-category',component:ManageCategoryComponent
      }
    ]    
  },
  {
    path:'portfolio',component:PortfolioComponent,
    children:[
      {
        path:'personal-info',component:PersonalInfoComponent
      },
      {
        path:'edu',component:EducationalQualificationComponent
      }
    ]
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

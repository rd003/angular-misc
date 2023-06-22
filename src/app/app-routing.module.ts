import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user.routing.module';
import { CategoryRoutingModule } from './category/category.routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  // {
  //   path: 'login',
  //   component:LoginComponent
  // },
  // {
  //   path: 'registration',
  //   component:RegistrationComponent
  // },
  // {
  //   path: 'add-category',
  //   component:AddCategoryComponent
  // },
  // {
  //   path: 'categories',
  //   component:DisplayCategoryComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule,
    CategoryRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

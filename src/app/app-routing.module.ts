import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch:'full'
  },
  {
    path: 'user',
    loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path: 'categories',
    loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

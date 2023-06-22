import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { CategoryRoutingModule } from './category.routing.module';



@NgModule({
  declarations: [
    AddCategoryComponent,
    DisplayCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';



@NgModule({
  declarations: [
    AddCategoryComponent,
    DisplayCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }

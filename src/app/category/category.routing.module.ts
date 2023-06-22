import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AddCategoryComponent } from "./components/add-category/add-category.component";
import { DisplayCategoryComponent } from "./components/display-category/display-category.component";

const routes: Routes = [
      {
        path: 'add-category',
        component:AddCategoryComponent
      },
      {
        path: 'categories',
        component:DisplayCategoryComponent
      }
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CategoryRoutingModule{}
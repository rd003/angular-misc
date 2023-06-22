import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { NgModule } from "@angular/core";


const routes:Routes = [
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'registration',
        component:RegistrationComponent
      },
]

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports:[RouterModule]
})
    
export class UserRoutingModule{}
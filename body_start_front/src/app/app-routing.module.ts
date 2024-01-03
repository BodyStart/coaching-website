import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExerciseComponent} from "./Admin/exercise_index/exercise.component";
import {LoginComponent} from "./Auth/login/login.component";
import {AboutComponent} from "./Customer/about/about.component";
import {HomeComponent} from "./Customer/home/home.component";
import {ProgramComponent} from "./Customer/program/program.component";
import {SubcriptionComponent} from "./Customer/subcription/subcription.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {ResetPasswordComponent} from "./Auth/reset-password/reset-password.component";

const routes: Routes = [
  {
    path:"", component: HomeComponent,
  },
  {
    path:"admin/exercises", component: ExerciseComponent,
  },
  {
    path:"login", component: LoginComponent,
  },
  {
    path:"register", component: RegisterComponent,
  },
  {
    path:"about", component: AboutComponent,
  },
  {
    path:"program", component: ProgramComponent,
  },
  {
    path:"subscription", component: SubcriptionComponent,
  },
  {
    path:"reset/password", component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

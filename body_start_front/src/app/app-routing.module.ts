import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExerciseComponent} from "./Admin/exercise_index/exercise.component";
import {LoginComponent} from "./Auth/login/login.component";

const routes: Routes = [
  {
    path:"admin/exercises", component: ExerciseComponent,
  },
  {
    path:"login", component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

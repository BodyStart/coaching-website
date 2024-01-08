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
import {ResetRequestPasswordComponent} from "./Auth/reset-request-password/reset-request-password.component";
import {SuggestionsComponent} from "./Customer/suggestions/suggestions.component";
import {CoachComponent} from "./Customer/coach/coach.component";
import {TransformationComponent} from "./Customer/transformation/transformation.component";

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
    path:"transformations", component: TransformationComponent,
  },
  {
    path:"suggestions", component: SuggestionsComponent,
  },
  {
    path:"coach", component: CoachComponent,
  },
  {
    path:"subscription", component: SubcriptionComponent,
  },
  {
    path:"reset/password", component: ResetPasswordComponent,
  },
  {
    path:"reset/request", component: ResetRequestPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

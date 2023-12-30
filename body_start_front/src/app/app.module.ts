import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Customer/home/home.component';
import { AboutComponent } from './Customer/about/about.component';
import { ProgramComponent } from './Customer/program/program.component';
import { SubcriptionComponent } from './Customer/subcription/subcription.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ExerciseComponent } from './Admin/exercise_index/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProgramComponent,
    SubcriptionComponent,
    LoginComponent,
    RegisterComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

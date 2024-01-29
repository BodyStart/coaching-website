import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './Customer/home/home.component';
import {AboutComponent} from './Customer/about/about.component';
import {ProgramComponent} from './Customer/program/program.component';
import {SubcriptionComponent} from './Customer/subcription/subcription.component';
import {LoginComponent} from './Auth/login/login.component';
import {RegisterComponent} from './Auth/register/register.component';
import {ExerciseComponent} from './Admin/exercise_index/exercise.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ResetPasswordComponent} from './Auth/reset-password/reset-password.component';
import {ResetRequestPasswordComponent} from './Auth/reset-request-password/reset-request-password.component';
import {FooterComponent} from './footer/footer.component';
import {TransformationComponent} from './Customer/transformation/transformation.component';
import {SuggestionsComponent} from './Customer/suggestions/suggestions.component';
import {CoachComponent} from './Customer/coach/coach.component';
import {ProfilComponent} from './Customer/profil/profil.component';
import {PageErrorComponent} from './page-error/page-error.component';
import {SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProgramComponent,
    SubcriptionComponent,
    LoginComponent,
    RegisterComponent,
    ExerciseComponent,
    HeaderComponent,
    ResetPasswordComponent,
    ResetRequestPasswordComponent,
    FooterComponent,
    TransformationComponent,
    SuggestionsComponent,
    CoachComponent,
    ProfilComponent,
    PageErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '461139887721-07fobnv5hemp6jisp54j06qenktsgkmu.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

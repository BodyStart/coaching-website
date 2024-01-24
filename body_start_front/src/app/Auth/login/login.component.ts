import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../Services/AuthManager";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  formData!: FormGroup
  isSubmitted: boolean = false
  user: any
  loggedIn: any
  @ViewChild('googleSignInBtn') googleSignInBtn: any; // Assurez-vous que le type est correct

  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: FormBuilder, private socialService: SocialAuthService) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })

    this.socialService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.authService.setUser(user)

      if (this.user) {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }
    })
  }

  ngAfterViewInit() {
    this.googleSignInBtn.signInObs.subscribe(() => {
      this.googleAuth();
    });
  }


  googleAuth() {
    if (this.user) {
      this.authService.setUser(this.user);

      // Envoyez les informations de l'utilisateur à votre API Symfony
      this.authService.googleAuth(this.user).subscribe(
        (response) => {
          console.log('Authentification réussie avec Google', response);
          // Gérez la réponse de votre API ici
        },
        (error) => {
          console.error('Erreur d\'authentification avec Google', error);
          // Gérez les erreurs ici
        }
      );
    }
  }

  login() {
    if (this.formData.valid) {
      this.authService.login(this.formData.value).subscribe((response: any) => {
          this.isSubmitted = true;
          if (response.roles) {
            this.authService.setRoles(response.roles);
            this.authService.setToken(response.token);
            this.authService.setEmail(response.username);
          }
          if (this.authService.hasRole('ROLE_ADMIN') && this.isSubmitted) {
            this.router.navigate(['/admin/exercises']);
          } else {
          }
        },
        (error) => {
          console.error('Erreur d\'authentification :', error);
          this.loginError = 'Erreur d\'authentification. Veuillez vérifier vos identifiants.';
        });
    }
  }
}

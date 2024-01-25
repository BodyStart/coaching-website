import {Component, OnInit} from '@angular/core';
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
        // Envoyez les informations de l'utilisateur à votre API Symfony
        this.authService.googleAuth(this.user).subscribe(
          (response) => {
            console.log('Authentification réussie avec Google', response);
          },
          (error) => {
            console.error('Erreur d\'authentification avec Google', error);
          }
        );
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }
    })
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

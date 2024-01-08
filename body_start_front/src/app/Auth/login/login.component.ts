import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../Services/AuthManager";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  formData!: FormGroup
  isSubmitted: boolean = false

  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
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
            alert('gg')
          }
        },
        (error) => {
          console.error('Erreur d\'authentification :', error);
          this.loginError = 'Erreur d\'authentification. Veuillez vérifier vos identifiants.';
        });
    }
  }
}

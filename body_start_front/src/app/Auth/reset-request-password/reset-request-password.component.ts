import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../Services/AuthManager";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-request-password',
  templateUrl: './reset-request-password.component.html',
  styleUrls: ['./reset-request-password.component.css']
})
export class ResetRequestPasswordComponent implements OnInit {
  formData!: FormGroup
  sendSuccess: string = '';
  loginError: string = '';

  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onResetRequest() {
    if (this.formData.value){
      this.auth.passwordResetRequest(this.formData.value).subscribe((response: any) => {
          this.sendSuccess = "Vous allez recevoir un email pour votre mot de passe."
        },
        (error) => {
          console.log(this.formData.value)
          console.error('Erreur d\'authentification :', error);
          this.loginError = 'Erreur d\'authentification.';
        });
    }
  }
}

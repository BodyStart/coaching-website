import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../Services/AuthManager";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formData!: FormGroup
  loginError: string = '';

  constructor(private auth: AuthentificationService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', [Validators.required]],
    })
  }


  onResetPassword() {
    if (this.formData.get('newPassword')?.value === this.formData.get('confirmNewPassword')?.value) {
      console.log('gg')
    } else {
      this.loginError = "Les 2 mots ne correspondent pas, veuillez recommencer !!!!"
    }
  }
}

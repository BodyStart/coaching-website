import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../Services/AuthManager";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginError: string = '';
  formData!: FormGroup
  isSubmitted: boolean = false

  constructor(private auth: AuthentificationService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      last_name: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      level: [null, [Validators.required]],
      date_birth: [null, [Validators.required]]
    })
  }

  onSubmit() {
    if (this.formData.valid) {
      this.auth.register(this.formData.value).subscribe((response: any) => {
          this.isSubmitted = true;
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(this.formData.value)
          console.error('Erreur d\'authentification :', error);
          this.loginError = 'Erreur d\'authentification. Veuillez vérifier vos identifiants.';
        });
    }
  }


}

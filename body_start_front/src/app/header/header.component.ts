import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../Services/AuthManager";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: any;
  email: any;
  user: any
  emailUser: string | null = null;
  tokenUser: string | null = null;
  isLoggedIn: boolean

  constructor(private route: Router, private auth: AuthentificationService, private authService: SocialAuthService) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.token = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
    const parseUser = JSON.parse(this.user);
    if (parseUser) {
      this.emailUser = parseUser.email;
      this.tokenUser = parseUser.idToken;
    }
  }

  logoutGoogle() {
    if (!this.email && this.emailUser && !this.token && this.tokenUser) {
      this.email = this.emailUser;
      this.token = this.tokenUser;
    }
    if (this.token) {
      localStorage.removeItem('token');
      localStorage.removeItem('userRoles');
      localStorage.removeItem('email');
      localStorage.removeItem('user');
      this.email = null;
      this.token = null;
      this.isLoggedIn = false;
      this.emailUser = null;
      this.tokenUser = null;

      this.route.navigateByUrl('/login').then(() => {
        window.location.reload();
      })
    }
  }

  logout() {
    if (!this.email && this.emailUser && !this.token && this.tokenUser) {
      this.email = this.emailUser;
      this.token = this.tokenUser;
    }
    this.auth.logout(this.email, this.token).subscribe((response: any) => {
      if (this.token) {
        localStorage.removeItem('token');
        localStorage.removeItem('userRoles');
        localStorage.removeItem('email');
        localStorage.removeItem('user');
        this.route.navigateByUrl('/login').then(() => {
          window.location.reload();
        })
      }
    }, (error) => {
      console.error('Erreur d\'authentification :', error);
    });
  }

  signOut(): void {
    this.authService.signOut(true);
  }
}

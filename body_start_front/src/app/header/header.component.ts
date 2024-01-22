import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../Services/AuthManager";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token!: string;
  email!: string;
  loggedIn!: boolean;

  constructor(private route: Router, private auth: AuthentificationService) {
  }

  ngOnInit() {
    this.email = localStorage.getItem('email') ?? '';
    this.token = localStorage.getItem('token') ?? '';
  }


  logout() {
    this.auth.logout(this.email, this.token).subscribe((response: any) => {
      if (this.token) {
        localStorage.removeItem('token');
        localStorage.removeItem('userRoles');
        localStorage.removeItem('email');
        this.route.navigateByUrl('/login').then(() => {
          window.location.reload();
        });
      }
    }, (error) => {
      console.error('Erreur d\'authentification :', error);
    });
  }
}

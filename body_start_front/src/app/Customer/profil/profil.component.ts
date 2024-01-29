import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any = {}

  ngOnInit() {
    const usersJsonString = localStorage.getItem('user');
    if (usersJsonString) {
      this.user = JSON.parse(usersJsonString);
    }
  }
}

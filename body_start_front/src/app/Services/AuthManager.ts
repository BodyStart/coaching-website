import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  urlAdmin: string = "http://localhost:8000/"

  register(formData: object) {
    return this.http.post(`${this.urlAdmin}api/register`, formData);
  }

  login(formData: object) {
    return this.http.post(`${this.urlAdmin}api/login_check`, formData);
  }

  passwordResetRequest(formData: object) {
    return this.http.post(`${this.urlAdmin}v2-api/password/reset/request`, formData);
  }

  googleAuth(user: object) {
    return this.http.post(`${this.urlAdmin}login/google/auth`, user);
  }

  logout(email: string, token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {headers: headers};

    return this.http.post(`${this.urlAdmin}api/logout`, {email}, options);
  }


  setRoles(roles: string[]): void {
    localStorage.setItem('userRoles', JSON.stringify(roles));
  }

  getRoles(): string[] {
    const storedRoles = localStorage.getItem('userRoles');
    return storedRoles ? JSON.parse(storedRoles) : [];
  }

  hasRole(role: string): boolean {
    const roles = this.getRoles();
    return roles.includes(role);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const storedToken = localStorage.getItem('token');
    return storedToken ? JSON.parse(storedToken) : null;
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  setEmail(email: string) {
    localStorage.setItem('email', email);
  }

  getEmail(): string | null {
    const storedEmail = localStorage.getItem('email');
    return storedEmail ? JSON.parse(storedEmail) : null;
  }

  removeEmail() {
    localStorage.removeItem('email');
  }

  setUser(user: object) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}

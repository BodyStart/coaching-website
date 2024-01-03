import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthentificationService} from "./AuthManager";

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  urlAdmin: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient, private auth: AuthentificationService) {
  }

  token = this.auth.getToken();
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${(this.token)}`
  });

   requestOptions = { headers: this.headers };


  exerciseIndex(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAdmin}exercises`, this.requestOptions);
  }

  addExercise(ExerciseData: any): Observable<any> {
    return this.http.post<any>(`${this.urlAdmin}exercises`, ExerciseData);
  }

  getExerciseById(idNumber: number): Observable<any> {
    return this.http.get<any>(`${this.urlAdmin}exercises/${idNumber}`);
  }

  editExercise(categoryId: number, categoryData: any): Observable<any> {
    return this.http.put<any>(`${this.urlAdmin}exercises/${categoryId}`, categoryData);
  }

  deleteExercise(categoryId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAdmin}exercises/${categoryId}`);
  }

}

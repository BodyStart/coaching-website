import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  urlAdmin: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) {
  }


  exerciseIndex(page: number): Observable<any[]> {
    const options = {params: {page: page.toString()}};
    return this.http.get<any[]>(`${this.urlAdmin}exercises`, options);
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

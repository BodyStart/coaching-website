import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../Services/ApiManager";
import {Observable} from "rxjs";

@Component({
  selector: 'app-exercise_index',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercise: Observable<any> | undefined

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.exercise = this.api.exerciseIndex(1);
  }
}

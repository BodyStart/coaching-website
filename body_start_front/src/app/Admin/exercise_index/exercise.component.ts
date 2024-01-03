import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../Services/ApiManager";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exercise_index',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: Observable<any> | undefined

  constructor(private api: ApiManagerService,  private router: Router) {
  }

  ngOnInit() {
    this.exercises = this.api.exerciseIndex();
  }

  onDelete(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      this.api.deleteExercise(id).subscribe(
        data => {
          this.router.navigateByUrl('/admin/exercise');
        },
        error => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
}

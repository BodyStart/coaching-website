export class Exercise {
  id!: number;
  title!: string;
  description!: string;
  serie!: number;
  reps!: number;
  restTime!: Date;
  domaine!: string;
  createdAt!: Date;

  constructor(
    title: string = '',
    description: string = '',
    serie: number = 0,
    reps: number = 10,
    domaine: string = "",
    restTime: Date = new Date(),
    createdAt: Date = new Date(),
  ) {
    this.title = title;
    this.description = description;
    this.serie = serie;
    this.reps = reps;
    this.domaine = domaine;
    this.restTime = restTime;
    this.createdAt = createdAt;

  }
}

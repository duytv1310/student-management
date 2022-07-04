import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public age = 0
  public name = 0
  constructor() {}
  
  public totalStudents = 0;
  public totalStudents$ = new BehaviorSubject<number>(0);

  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudents$.next(total);
    // console.log(total)
  }
  public incrementStudent() {
    this.totalStudents++;
    this.totalStudents$.next(this.totalStudents);
    // console.log(total)
  }
  public decrementStudent() {
    this.totalStudents--;
    this.totalStudents$.next(this.totalStudents);
    // console.log(total)
  }
}

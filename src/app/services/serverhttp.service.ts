import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root',
})
export class ServerhttpService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private REST_API_SERVER = 'http://localhost:3000';

  public getStudent() {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getRandomStudent() {
    const url = `https://randomuser.me/api/?results=1`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addStudent(student: Student) {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .post(url, student, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getStudentDetails(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateStudent(studentId: number, updatedStudent: Student) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .put(url, updatedStudent, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient.delete(url).pipe(catchError(this.handleError));
  }

  constructor(private httpClient: HttpClient) {}
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

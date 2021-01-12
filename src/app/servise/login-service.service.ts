import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Admin} from '../entity/Admin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  loginurl = 'http://localhost:8080/Admin/' ;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {

  }
  login(Login: Admin): Observable<any> {
    return  this.httpClient.post(`${this.loginurl}` + 'login', Login).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log(alert('Connection Error'));
    return throwError(error);
  }
}

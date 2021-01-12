import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Interviewee} from '../entity/Interviewee';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  registerurl = 'http://localhost:8080/Interviewee/add/' ;
  levelurl = 'http://localhost:8080/Level/' ;

  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private httpClient: HttpClient) {

    }
    creatInterviewee(Registration: Interviewee, levelId: number): Observable<any> {
        console.log(Registration);
        return  this.httpClient.post(this.registerurl + 1 + '/' + levelId , Registration);

    }

    getLevel(): Observable<any> {
      return  this.httpClient.get(this.levelurl + '/all/').pipe(catchError(this.handleError));
    }


  handleError(error: HttpErrorResponse) {
    console.log(alert('Connection Error'));
    return throwError(error);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Question} from '../entity/question';
@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {
 // getexamNameURL = 'http://172.16.1.61:9090/Exam/all';
   // getexamNameURL = 'http://172.16.1.90:9090/Exam/all';
  // getallquetionURL = 'http://172.16.1.90:9090/Question/by_Exam_id/';

   getexamNameURL = 'http://localhost:8080/Exam/all';
   getallquetionURL = 'http://localhost:8080/Question/by_Exam_id/';
  updateQuestionURL = 'http://localhost:8080/Question/update/';
  constructor(private http: HttpClient, private router: Router) { }
  getexamName(): Observable<any> {
    return  this.http.get(`${this.getexamNameURL}` );
  }
  getallQuestion(Examid: number): Observable<any> {

    return  this.http.get( `${this.getallquetionURL}${Examid}`  );
  }

  updatQuestion(question: any, questionId: number): Observable<any> {

    return  this.http.put(`${this.updateQuestionURL}${questionId} `, question);

  }

  deletQuestion(questionId: number): Observable<any> {
    return  this.http.delete(`${this.getexamNameURL}/${questionId} `);

  }
  SendAnswer(question2: Question, Examid: number): Observable<any> {

    return  this.http.post( `${this.getallquetionURL}${Examid}`, question2 );
  }
}

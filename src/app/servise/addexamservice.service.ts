import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exam} from '../entity/exam';
import {Question} from '../entity/question';


@Injectable({
  providedIn: 'root'
})
export class AddexamserviceService {
  saveQuestionURL = 'http://localhost:8080/Question/add/';
  private saveExameNameURL = 'http://localhost:8080/Exam/add';
  private updateExameNameURL = 'http://localhost:8080/Exam/update_examby_name';
  constructor(private http: HttpClient) { }

  saveExamName(Exam1: Exam): Observable<any> {
    return  this.http.post(`${this.saveExameNameURL}` , Exam1);

  }

  updeteExam(Exam1: Exam): Observable<any> {
    return  this.http.post(`${this.updateExameNameURL}` , Exam1);

  }
  saveQuestion(ExamId: number, question: Question): Observable<any> {
    return  this.http.post(`${this.saveQuestionURL}/${ExamId}`  , question);

  }

}

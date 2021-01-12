import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChooseExamsService {
   url = 'http://localhost:8080/Exam/all';
  url1 = 'http://localhost:8080/Question/by_Exam_id';

  constructor(private http: HttpClient) {}

  getAllExamsName(): Observable<any> {
     return this.http.get(this.url);
  }
  getExamById(id: number): Observable<any> {
    return this.http.get(this.url1 + '/' + id);
  }



}


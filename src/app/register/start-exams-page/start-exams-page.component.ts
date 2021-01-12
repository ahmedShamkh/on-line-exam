import { Component, OnInit } from '@angular/core';
import {ChooseForIntervieweeComponent} from '../choose-for-interviewee/choose-for-interviewee.component';
import {Router} from '@angular/router';
import {ExamPageComponent} from '../exam-page/exam-page.component';
import {Exam} from '../../entity/exam';

@Component({
  selector: 'app-start-exams-page',
  templateUrl: './start-exams-page.component.html',
  styleUrls: ['./start-exams-page.component.css']
})
export class StartExamsPageComponent implements OnInit {
  constructor(private router: Router) {}


   static examName: string;
  static examId: any;
  static examTime: number;
  // tslint:disable-next-line:align
  public ExamIsStarted = false;
 // private ExamisDone: boolean;

  selectedExam: Exam;

  ngOnInit() {
    debugger;
    this.selectedExam = ChooseForIntervieweeComponent.slectedExam;
    console.log(this.selectedExam);
   // this.ExamisDone = ExamPageComponent.ExamIsDone;
  }


  navigatoexampage(Exam): void {
    debugger;

    console.log(Exam)
    // StartExamsPageComponent.examId = id;
    // console.log(StartExamsPageComponent.examId);
    // StartExamsPageComponent.examName = name;
    this.router.navigateByUrl('register/Exam-page');
    this.ExamIsStarted = true;
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Exam} from '../../entity/exam';
import {ChooseForUpdateComponent} from '../../exam/choose-for-update/choose-for-update.component';
import {UpdateServiceService} from '../../servise/update-service.service';

@Component({
  selector: 'app-choose-for-interviewee-component',
  templateUrl: './choose-for-interviewee.component.html',
  styleUrls: ['./choose-for-interviewee.component.css']
})
export class ChooseForIntervieweeComponent implements OnInit {
  constructor(private updateservive: UpdateServiceService, private router: Router) {}
  // static examTime: number[];
  // tslint:disable-next-line:max-line-length

  // slectedExams
  static slectedExam: Exam; // {id: number, name: string, finalgrade: number, time: number}[] = [];
  // static examname: string;
  // static finalgrade: number;
  // static examId: number;

  // allExams
  allExams: Exam[] = [];

  question: object[] = [];
  isSlected: boolean;

  ngOnInit() {
    debugger;
    this.getExamName();


  }
  getExamName() {
    debugger;
    this.updateservive.getexamName().subscribe(res => {

      this.allExams = res;
      console.log(res);

    });

  }

  chooseExam(exam) {
    debugger;
    this.isSlected = true;
    ChooseForIntervieweeComponent.slectedExam = exam;
    console.log( ChooseForIntervieweeComponent.slectedExam);
        // {id , name , finalgrade, time}
        // ChooseForIntervieweeComponent.examname = name;
        // ChooseForIntervieweeComponent.examTime.push(time) ;
        // ChooseForIntervieweeComponent.finalgrade = finalgrade;
       // this.router.navigateByUrl('');

  }
  NavigateToStartExam() {
    debugger;
    this.router.navigateByUrl('register/Exam-page');

}

  chooseOtheErxam() {
    this.isSlected = false;
  }
}

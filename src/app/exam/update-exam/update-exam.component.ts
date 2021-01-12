import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '../../entity/question';
import {Exam} from '../../entity/exam';
import {ChooseForUpdateComponent} from '../choose-for-update/choose-for-update.component';
import {UpdateServiceService} from '../../servise/update-service.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {
  constructor(private updatesevice: UpdateServiceService, private router: Router,
              public examToUpdate: Exam
              ) {}
static question: Question;
  static questionId: number;

Examtime: number;
ExamName: string;
finalGrade: number;
  question1: Question[] =  [];
  display: any;
  questionToUdate: any;


 // debugger;



  ngOnInit(): void {
debugger
    this.examToUpdate.id = ChooseForUpdateComponent.examId;
    this.examToUpdate.time = ChooseForUpdateComponent.examTime;
    this.examToUpdate.name = ChooseForUpdateComponent.examname;
    this.examToUpdate.finalGrade = ChooseForUpdateComponent.finalgrade;

    this.getallQuestion(ChooseForUpdateComponent.examId);
// console.log(this.examdetails.id);

  }
  getallQuestion(ExamId: number) {
debugger;
this.updatesevice.getallQuestion(ExamId).subscribe(res => {
      this.question1 = res;
    //  console.log(this.question1);
      console.log(this.question1);

}, erro => console.log('error') );

  }

  navigaToupdatequestion(question: Question, questionId: number) {
    debugger;
    console.log(this.question1);
    UpdateExamComponent.question = question;
    console.log(UpdateExamComponent.question);
    UpdateExamComponent.questionId = questionId;
    console.log(UpdateExamComponent.question);
   // this.router.navigateByUrl('updateQuestion');
    this.display = true;
    this.questionToUdate = question;

  }

  playDisplay(event: any) {
    this.display = event;
  }
}

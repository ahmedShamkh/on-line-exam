import { Component, OnInit } from '@angular/core';
import {ChooseForUpdateComponent} from '../../exam/choose-for-update/choose-for-update.component';
import {UpdateExamComponent} from '../../exam/update-exam/update-exam.component';
import {Question} from '../../entity/question';
import {Router} from '@angular/router';
import {UpdateServiceService} from '../../servise/update-service.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
   question2: Question;
   questionId: number;
  constructor(private updatesevice: UpdateServiceService, private router: Router) { }

  ngOnInit() {
    this.question2 = UpdateExamComponent.question;
    console.log('d' +  this.question2.answer4);
    this.questionId = UpdateExamComponent.questionId;
    // console.log(this.question2);
   // console.log(this.questionId);
  }

  updateQuestion(question: any, questionId: number) {
    console.log(questionId);
    console.log(question);
    this.updatesevice.updatQuestion( question, questionId).subscribe(res => {
      console.log(res);
    }, erro => console.log('error'));

  }

  deletquetion( questionId: number) {

    this.updatesevice.deletQuestion( questionId).subscribe(res => {


    });

  }

  returnToUpdateExam() {
    this.router.navigateByUrl('update-exam');
  }

  ch1(e) {
    if (e.target.checked === true) {
      e.target.value = 1 ;
      this.question2.isAnswer1 = '1' ;

    } else {
      e.target.value = 0 ;
      console.log(e.target.value);
      this.question2.isAnswer1 = '0' ;

    }

  }

  ch2(e) {
    if (e.target.checked === true) {
      e.target.value = 1 ;
      this.question2.isAnswer2 = '1' ;

    } else {
      e.target.value = 0 ;
      console.log(e.target.value);
      this.question2.isAnswer2 = '0' ;

    }
  }

  ch3(e) {
    if (e.target.checked === true) {
      e.target.value = 1 ;
      this.question2.isAnswer3 = '1' ;

    } else {
      e.target.value = 0 ;
      console.log(e.target.value);
      this.question2.isAnswer3 = '0' ;

    }
  }

  ch4(e) {
    if (e.target.checked === true) {
      e.target.value = 1 ;
      this.question2.isAnswer4 = '1' ;

    } else {
      e.target.value = 0 ;
      console.log(e.target.value);
      this.question2.isAnswer4 = '0' ;

    }
  }
}

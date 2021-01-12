import { Component, OnInit } from '@angular/core';

import {Exam} from '../../entity/exam';
import {Question} from '../../entity/question';
import {Router} from '@angular/router';
import {UpdateServiceService} from '../../servise/update-service.service';

@Component({
  selector: 'app-choose-for-update',
  templateUrl: './choose-for-update.component.html',
  styleUrls: ['./choose-for-update.component.css']
})
export class ChooseForUpdateComponent implements OnInit {
  constructor(private updateservive: UpdateServiceService, private router: Router) {}
static examTime: number;
  static examname: string;
  static finalgrade: number;
static examId: number;
 examdetails: Exam[] = [];
  question: object[] = [];

  ngOnInit() {
    debugger
    this.getExamName();


  }
getExamName() {
    this.updateservive.getexamName().subscribe(res => {

      this.examdetails = res;
      console.log(res);

    });

}

  navigateToUpdate(id: number, name: string, time: number, finalgrade: number) {
    debugger
    ChooseForUpdateComponent.examId = id;
    ChooseForUpdateComponent.examname = name;
    ChooseForUpdateComponent.examTime = time;
    ChooseForUpdateComponent.finalgrade = finalgrade;
    this.router.navigateByUrl('exam/update-exam');


  }


}

import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { question, Question } from '../../entity/question';
import { ChooseForIntervieweeComponent } from '../choose-for-interviewee/choose-for-interviewee.component';

import { Router } from '@angular/router';
import { ChooseForUpdateComponent } from '../../exam/choose-for-update/choose-for-update.component';
import { StartExamsPageComponent } from '../start-exams-page/start-exams-page.component';
import { UpdateServiceService } from '../../servise/update-service.service';
import { Exam } from '../../entity/exam';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css'],
})
export class ExamPageComponent implements OnInit {
  constructor(
    private updatesevice: UpdateServiceService,
    private router: Router,
    public slectedExam: Exam
  ) {}

  static result: {
    id: number;
    isAnswer1: number;
    isAnswer2: number;
    isAnswer3: number;
    isAnswer4: number;
  }[];

  static questionId: number;
  static ExamIsDone = false;

  public question2 = {
    isAnswer1: 0,
    isAnswer2: 0,
    isAnswer3: 0,
    isAnswer4: 0,
  };
  finalResult = 0;
  public questionList: Array<question>;
  ExamTime: number;
  questionText: string;

  exam: Question[] = [];
  ExamName: string;
  xx = '';
  debugger;
  interval: Subscription;

  timeLeft: number;
  counter = 0;

  ssssss: number[] = [];
  kkk: number[] = [];

  ngOnInit(): void {
    debugger;
    this.slectedExam = ChooseForIntervieweeComponent.slectedExam;
    this.timeLeft = this.slectedExam.time;
    this.getallQuestion(this.slectedExam.id);
    console.log(this.questionText);
    // this.startTimer();

    this.startTimer();
  }

  getallQuestion(ExamId: number) {
    debugger;
    this.updatesevice.getallQuestion(ExamId).subscribe(
      (res) => {
        this.questionList = res;
        console.log(this.questionList);
        //  console.log(this.question1);
      },
      (erro) => console.log('error')
    );
  }
  check(e) {
    if (e.target.checked === true) {
      this.question2.isAnswer1 = 1;
      console.log(this.question2.isAnswer1);
    } else {
      this.question2.isAnswer1 = 0;
      console.log(this.question2.isAnswer1);
    }
  }
  check2(e, questionId: number): void {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer2 = 1;
    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer2 = 0;
      console.log(this.question2.isAnswer2);
    }
  }
  check3(e) {
    if (e.target.checked === true) {
      this.question2.isAnswer3 = 1;
    } else {
      this.question2.isAnswer3 = 0;
      console.log(this.question2.isAnswer3);
    }
  }
  check4(e) {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer4 = 1;
    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer4 = 0;
    }
  }
  result() {
    debugger;
    // ExamPageComponent.result.push(this.question2);
    console.log(ExamPageComponent.result);
    this.router.navigateByUrl('register/start-exam');
  }

  //   SendResultAndNavigate() {
  //     this.updatesevice.SendAnswer(this.question2, this.examid).subscribe(res => {
  //       ExamPageComponent.result = res;
  //     }, error1 => {
  // console.log('error');
  //     } ) ;
  //    // ExamPageComponent.ExamIsDone = true;
  //     this.router.navigateByUrl('start-exam');
  //   }
  //   startTimer() {
  //     this.interval = setInterval(() => {
  //       if (this.timeLeft > 0) {
  //         this.timeLeft--;
  //       } else {
  //         // ExamPageComponent.ExamIsDone = true;
  //        // this.SendResultAndNavigate();
  //         this.router.navigateByUrl('register/start-exam');
  //       }
  //     }, 1000);
  //   }

  startTimer(): void {
    // this.interval = setInterval(() => {
    //   if (this.timeLeft > 0) {
    //     this.timeLeft--;
    //   } else {
    //     this.timeLeft = 60;
    //   }
    // }, 1000 * 60);

 this.interval = interval(1000).subscribe((timer) => {
      if(timer=== this.slectedExam.time*60){
this.interval.unsubscribe()
this.router.navigateByUrl('');
      }
    });
  }

  pauseTimer() {
    clearInterval(5);
  }

  saveanswer(answers: Question): void {
    debugger;
    this.question2;
    this.counter = answers.id;
    this.ssssss.push(this.counter);

    if (
      Number(answers.isAnswer1) === this.question2.isAnswer1 &&
      Number(answers.isAnswer2) === this.question2.isAnswer2 &&
      Number(answers.isAnswer3) === this.question2.isAnswer3 &&
      Number(answers.isAnswer4) === this.question2.isAnswer4
    ) {
      this.finalResult++;
      this.kkk.push(answers.id);
    }
    this.question2 = {
      isAnswer1: 0,
      isAnswer2: 0,
      isAnswer3: 0,
      isAnswer4: 0,
    };
    console.log(this.finalResult);
  }

  mmmmmmmm(id): boolean {
    if (this.kkk.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  exitFromExam(e): void {
    debugger;
    if (e.target.value === 0) {
      this.result();
    }
  }
}

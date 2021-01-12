import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {question, Question} from '../../entity/question';
import {AddexamserviceService} from '../../servise/addexamservice.service';
import {UpdateServiceService} from '../../servise/update-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input()
  display: any;
  @Input()
  ExamId;
  @Input()
  questionToUdate: question;
  @Output()
  displayBack = new EventEmitter();

  switch: any;
  constructor(public question2: question,
              private addexamserviceService: AddexamserviceService,
              private updatesevice: UpdateServiceService

  ) {
  }

  ngOnInit(): void {
    debugger;
    if (this.questionToUdate){
    this.question2 = this.questionToUdate;

    this.switch = true;
  }

  }


  ch1(e): void {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer1 = '1';

    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer1 = '0';

    }

  }

  ch2(e): void {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer2 = '1';

    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer2 = '0';

    }
  }

  ch3(e): void {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer3 = '1';

    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer3 = '0';

    }
  }

  ch4(e): void {
    if (e.target.checked === true) {
      e.target.value = 1;
      this.question2.isAnswer4 = '1';

    } else {
      e.target.value = 0;
      console.log(e.target.value);
      this.question2.isAnswer4 = '0';

    }

  }

  returnValeToParnt(displayvalue: boolean){

     this.displayBack.emit(displayvalue);
  }

  addQuestion(): void {
    this.display = true;
    debugger;
    this.addexamserviceService.saveQuestion( this.ExamId, this.question2).subscribe(a => {


     alert('aaaaaaaaaaa');
     this.question2 = new Question();
    });



  }

  handleClear(): void{
    debugger;
    this.display = false;
    this.returnValeToParnt(false);
  }



  udateQuestion() {

    this.updatesevice.updatQuestion( this.question2, this.question2.id).subscribe(res => {
      console.log(res);
    }, erro => console.log('error'));

  }

}


import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {question, Question} from '../../entity/question';
import {Exam} from '../../entity/exam';
import {Router} from '@angular/router';
import {AddexamserviceService} from '../../servise/addexamservice.service';



@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  @Input()
  examToUpdate: Exam;

  @Output()
  reloadAllQuestion = new EventEmitter();

  switchBtweenExamAndQuestion = false;
  Exam1 = new Exam();
  id: number;
  question = new Question();
  ExamId: any;
  display = false;
  ExameName;
  switchBetweenAddUpdate = false;
  addOrUpdate = 'Add New Exam';


  constructor(private addExamServices: AddexamserviceService , private router: Router ) { }

  ngOnInit(): void {
    debugger;
    if (this.examToUpdate) {
    this.switchBetweenAddUpdate = true;
    this.switchBtweenExamAndQuestion = true;
    this.addOrUpdate = 'Update Exam';
    this.Exam1 = this.examToUpdate;
    this.changeName();
    this.ExamId = this.Exam1.id;

    }
  }
  SaveExamName(): void {
    this.addExamServices.saveExamName(this.Exam1).subscribe(res => {
      this.ExamId = res.id;
      this.Exam1 = res;
      console.log(this.Exam1);
      alert('dddddddddddddddddd');

    }, error1 => {console.log('error'); } );
    this.switchBtweenExamAndQuestion = true;
  }

  openTosave(): void {
    debugger;
    this.display = true;

  }

  changeName(): void {
    this.ExameName = this.Exam1.name;
  }

  playDisplay(event: any) {
    this.display = event;
    this.reloadAllQuestion.emit(event);
  }

  UpdateExam() {
    this.addExamServices.updeteExam(this.Exam1).subscribe(a => {
      console.log(a);
    });
  }
}

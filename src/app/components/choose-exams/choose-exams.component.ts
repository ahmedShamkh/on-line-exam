import {Component, Injectable, OnInit} from '@angular/core';

import {Exam} from '../../entity/exam';

import {Question} from '../../entity/question';
import {ChooseExamsService} from '../../servise/choose-exams.service';

@Component({
  selector: 'app-choose-exams',
  templateUrl: './choose-exams.component.html',
  styleUrls: ['./choose-exams.component.css']
})


export class ChooseExamsComponent implements OnInit {
  exames: Exam = new Exam();
  constructor(private choose: ChooseExamsService,  private exam: Question  ) { }


  Exams = [];
  value: boolean;

  getallexames() {
    return this.choose.getAllExamsName().subscribe(data => {
      for (const d of(data as any)) {
       this.Exams.push({
        name: d.name,
        time: d.time,
        finalGrade: d.finalGrade,
        id: d.id,
        });

      }

    });
  }

  getExamsID(id: number) {

    this.choose.getExamById(id).subscribe(data => {
      this.exam = data;
      console.log(this.exam);
    });
  }

  ngOnInit() {
    this.getallexames();
  }
}

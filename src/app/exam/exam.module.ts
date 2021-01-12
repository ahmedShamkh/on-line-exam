import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {AddExamComponent} from './add-exam/add-exam.component';
import {UpdateExamComponent} from './update-exam/update-exam.component';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ChooseForUpdateComponent} from './choose-for-update/choose-for-update.component';



@NgModule({
  declarations: [
    ExamComponent,
    AddExamComponent,
    AddQuestionComponent,
    UpdateExamComponent,
    ChooseForUpdateComponent

  ],
  imports: [
    CommonModule,

    ExamRoutingModule,
    FormsModule,
    DialogModule,

  ]
})
export class ExamModule { }

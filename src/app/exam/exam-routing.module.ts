import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamComponent } from './exam.component';
import {AddExamComponent} from './add-exam/add-exam.component';
import {UpdateExamComponent} from './update-exam/update-exam.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {ChooseForUpdateComponent} from './choose-for-update/choose-for-update.component';


const routes: Routes = [
  { path: '', component: ExamComponent },

  { path: 'add-exam', component: AddExamComponent },
  {path: 'add-qustion', component: AddQuestionComponent},
  { path: 'chose-forUpdate', component: ChooseForUpdateComponent },
  {path: 'update-exam', component: UpdateExamComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import {RegistrationComponent} from './registration/registration.component';
import {ChooseForIntervieweeComponent} from './choose-for-interviewee/choose-for-interviewee.component';
import {StartExamsPageComponent} from './start-exams-page/start-exams-page.component';
import {ExamPageComponent} from './exam-page/exam-page.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  {path: 'choose-for-interviwee', component: ChooseForIntervieweeComponent},
  {path: 'start-exam', component : StartExamsPageComponent},
  {path: 'Exam-page', component: ExamPageComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

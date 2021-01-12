import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {RegistrationComponent} from './registration/registration.component';
import {ExamPageComponent} from './exam-page/exam-page.component';
import {StartExamsPageComponent} from './start-exams-page/start-exams-page.component';
import {ChooseForIntervieweeComponent} from './choose-for-interviewee/choose-for-interviewee.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    RegistrationComponent,
    ExamPageComponent,
    StartExamsPageComponent,
    ChooseForIntervieweeComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ],
  providers: [  ]
})
export class RegisterModule { }

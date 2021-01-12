import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { IntervieweeComponent } from './components/interviewee/interviewee.component';
import { ChooseExamsComponent } from './components/choose-exams/choose-exams.component';
import { AddExamComponent } from './exam/add-exam/add-exam.component';
import {FormsModule} from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './register/registration/registration.component';

import {ChooseForUpdateComponent} from './exam/choose-for-update/choose-for-update.component';
import {UpdateExamComponent} from './exam/update-exam/update-exam.component';
import {StartExamsPageComponent} from './register/start-exams-page/start-exams-page.component';
import {ChooseForIntervieweeComponent} from './register/choose-for-interviewee/choose-for-interviewee.component';
import {UpdateQuestionComponent} from './components/update-question/update-question.component';
import { ExamPageComponent } from './register/exam-page/exam-page.component';
import { AddQuestionComponent } from './exam/add-question/add-question.component';
import {AddexamserviceService} from './servise/addexamservice.service';
import {Exam} from './entity/exam';
import {question, Question} from './entity/question';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuardServiceService} from './servise/auth-guard-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,

    IntervieweeComponent,
    ChooseExamsComponent,

    UpdateQuestionComponent,




  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,
  HttpClientModule],
  providers: [
    AddexamserviceService, Question, Exam, question, AuthGuardServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

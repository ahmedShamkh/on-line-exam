import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewee',
  templateUrl: './interviewee.component.html',
  styleUrls: ['./interviewee.component.css']
})
export class IntervieweeComponent implements OnInit {
  interviewees: any;

  constructor() {}

  ngOnInit(): void {}
}

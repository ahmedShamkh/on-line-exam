import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() {
    this.counter = 0;
    this.getData();
    this.name = 'Angular2';
  }

  name: string;
  data = ['...', 'aa', 'ff']; // refer plunker
  content: any[] = new Array();
  counter: number;

  ngOnInit(): void {
  }
  getData(){
    console.log(this.counter + 'dat size' + this.data.length);

    for (let i = this.counter + 1; i < this.data.length; i++)
    {
      this.content.push(this.data[i]);
      if (i % 10 === 0) { break; }
    }
    this.counter += 10;

  }

}

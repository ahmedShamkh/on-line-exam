import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit   {
  @ViewChild("login") loginHtml:NgForm;
  @ViewChild("register")registerHtml:NgForm;
  @ViewChild("login") homeHtml:NgForm;
  constructor(private router: Router) {}

  static isAuthenticat = '';
  ngOnInit(): void {}
  isAuthenticat(): string {
    return NavbarComponent.isAuthenticat;
  }

  logout(): void {
    sessionStorage.setItem('auth', '');
    window.location.reload();
    this.router.navigateByUrl('');
  }

  
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterViewChecked(){
    // this.onclick(this.homeHtml);
  }
  clickMe(){
    console.log("link clicked")
  }


  // onclick(i) {
  //   debugger;
  //   console.log(this.router.url);
  //   let button = document.querySelectorAll('a');
  //   console.log(i.id);
  //   button.forEach.call(button, function (a) {
  //     document.getElementById('home').className = 'nav-link';
  //     document.getElementById('register').className = 'nav-link';
  //     document.getElementById('login').className = 'nav-link';
  //     if (i.id === 'home') {
  //       document.getElementById('home').className = 'activ';
  //     } else if (i.id === 'register') {
  //       document.getElementById('register').className = 'activ';
  //     } else {
  //       document.getElementById('login').className = 'activ';
  //     }
  //   });
  // }
}

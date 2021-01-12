import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private  router: Router) {

  }

  static  isAuthenticat = '';
  ngOnInit(): void {
    NavbarComponent.isAuthenticat = sessionStorage.getItem('auth');
  }
   isAuthenticat(): string {
    return NavbarComponent.isAuthenticat;
  }

  logout(): void{
  sessionStorage.setItem('auth', '');
  window.location.reload();
  this.router.navigateByUrl('');
}
}

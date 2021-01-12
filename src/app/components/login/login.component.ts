import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Admin} from '../../entity/Admin';
import {LoginServiceService} from '../../servise/login-service.service';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  public Login: Admin = new Admin;
  // tslint:disable-next-line:new-parens
  private Login2: Admin = new Admin;

  id: number;


  constructor(private loginservice: LoginServiceService,  private router: Router) { }

ngOnInit(): void {
}

  authlog(Login: Admin): void {
    debugger
    this.loginservice.login(Login).subscribe(res => {
      console.log(res);
      if (!(res === null)) {
        sessionStorage.setItem('auth', 'true');
        this.Login2 = res;
        console.log(this.Login2.id);
        NavbarComponent.isAuthenticat = 'true';
      }
      if (sessionStorage.getItem('auth') === 'true') {
        this.router.navigateByUrl('home');
      }
 //      else {
 // this.router.navigateByUrl('');
 //      }
    });


  }

}

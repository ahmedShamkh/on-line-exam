import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../entity/Admin';
import { LoginServiceService } from '../../servise/login-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  public Login: Admin = new Admin();
  private Login2: Admin = new Admin();

  id: number;

  constructor(
    private loginservice: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form.setValue({
      
    })
  }

  authlog(form: NgForm): void {
    debugger;
    sessionStorage.setItem('auth', 'true');
    console.log(this.Login2.id);
    NavbarComponent.isAuthenticat = 'true';
    this.router.navigateByUrl('home');
    this.loginservice.login(form.value).subscribe((res) => {
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

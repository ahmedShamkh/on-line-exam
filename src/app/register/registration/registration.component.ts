
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Interviewee} from '../../entity/Interviewee';
import {Level} from '../../entity/Level';
import {LoginComponent} from '../../components/login/login.component';
import {RegistrationServiceService} from '../../servise/registration-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  Registration = new Interviewee();
 Levels: Array<Level> = [];
 level: Level = new Level();

  constructor(private RegistrationService: RegistrationServiceService, private router: Router) { }

  ngOnInit() {
    // if ( localStorage.getItem('auth') === 'false'){
    //   this.router.navigateByUrl('');
    // }
    this.getlevel();
  }

  selectChangeHandle(event: any) {
   if (event !== 'Select Level') {
     this.level = this.Levels[event.target.value];
     console.log(this.level);
    }
  }

  creatInterviewee() {
    debugger
    this.RegistrationService.creatInterviewee(this.Registration, this.level.id).subscribe(res => {
     console.log(res);
     this.router.navigateByUrl('register/choose-for-interviwee');
    });
    this.router.navigateByUrl('register/choose-for-interviwee');

}
  getlevel() {
    return this.RegistrationService.getLevel().subscribe(data1 => {
      console.log(data1);
      this.Levels = data1;
    });



  }
}

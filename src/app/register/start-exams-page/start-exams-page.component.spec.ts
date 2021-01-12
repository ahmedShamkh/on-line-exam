import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartExamsPageComponent } from './start-exams-page.component';

describe('StartExamsPageComponent', () => {
  let component: StartExamsPageComponent;
  let fixture: ComponentFixture<StartExamsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartExamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

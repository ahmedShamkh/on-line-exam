import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseForUpdateComponent } from './choose-for-update.component';

describe('ChooseForUpdateComponent', () => {
  let component: ChooseForUpdateComponent;
  let fixture: ComponentFixture<ChooseForUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseForUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseForUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

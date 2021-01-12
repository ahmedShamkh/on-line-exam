import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChooseForIntervieweeComponent } from "./choose-for-interviewee.component";

describe("ChooseExamsComponent", () => {
  let component: ChooseForIntervieweeComponent;
  let fixture: ComponentFixture<ChooseForIntervieweeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseForIntervieweeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseForIntervieweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

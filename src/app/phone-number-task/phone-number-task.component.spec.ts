import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberTaskComponent } from './phone-number-task.component';

describe('PhoneNumberTaskComponent', () => {
  let component: PhoneNumberTaskComponent;
  let fixture: ComponentFixture<PhoneNumberTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScheduleClienteComponent } from './new-schedule-cliente.component';

describe('NewScheduleClienteComponent', () => {
  let component: NewScheduleClienteComponent;
  let fixture: ComponentFixture<NewScheduleClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewScheduleClienteComponent]
    });
    fixture = TestBed.createComponent(NewScheduleClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

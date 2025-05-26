import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarraMobileComponent } from './sidebarra-mobile.component';

describe('SidebarraMobileComponent', () => {
  let component: SidebarraMobileComponent;
  let fixture: ComponentFixture<SidebarraMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarraMobileComponent]
    });
    fixture = TestBed.createComponent(SidebarraMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

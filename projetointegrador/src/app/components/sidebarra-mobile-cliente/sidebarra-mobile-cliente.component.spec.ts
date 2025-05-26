import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarraMobileClienteComponent } from './sidebarra-mobile-cliente.component';

describe('SidebarraMobileClienteComponent', () => {
  let component: SidebarraMobileClienteComponent;
  let fixture: ComponentFixture<SidebarraMobileClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarraMobileClienteComponent]
    });
    fixture = TestBed.createComponent(SidebarraMobileClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

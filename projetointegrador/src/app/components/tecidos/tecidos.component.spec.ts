import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecidosComponent } from './tecidos.component';

describe('TecidosComponent', () => {
  let component: TecidosComponent;
  let fixture: ComponentFixture<TecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

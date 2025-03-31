import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgManequimComponent } from './bg-manequim.component';

describe('BgManequimComponent', () => {
  let component: BgManequimComponent;
  let fixture: ComponentFixture<BgManequimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgManequimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgManequimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

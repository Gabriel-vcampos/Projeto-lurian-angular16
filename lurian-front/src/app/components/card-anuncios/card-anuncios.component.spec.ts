import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnunciosComponent } from './card-anuncios.component';

describe('CardAnunciosComponent', () => {
  let component: CardAnunciosComponent;
  let fixture: ComponentFixture<CardAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnunciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

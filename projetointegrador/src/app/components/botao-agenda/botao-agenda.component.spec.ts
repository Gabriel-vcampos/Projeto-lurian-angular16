import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAgendaComponent } from './botao-agenda.component';

describe('BotaoAgendaComponent', () => {
  let component: BotaoAgendaComponent;
  let fixture: ComponentFixture<BotaoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

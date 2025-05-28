import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAgendamentoClienteComponent } from './tabela-agendamento-cliente.component';

describe('TabelaAgendamentoClienteComponent', () => {
  let component: TabelaAgendamentoClienteComponent;
  let fixture: ComponentFixture<TabelaAgendamentoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaAgendamentoClienteComponent]
    });
    fixture = TestBed.createComponent(TabelaAgendamentoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

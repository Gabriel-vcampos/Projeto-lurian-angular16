import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiUrl = 'http://localhost:8080/agendamentos';

  constructor(private http: HttpClient) {}

  cadastrarAgendamento(agendamento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, agendamento);
  }
}

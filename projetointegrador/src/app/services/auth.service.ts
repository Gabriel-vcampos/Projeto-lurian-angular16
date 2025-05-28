import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/cadastro`, dados);
  }
  login(dados: { email: string; senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/login`, dados);
  }
}

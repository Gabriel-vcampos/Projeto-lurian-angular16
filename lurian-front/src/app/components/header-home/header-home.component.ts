import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  username: string = '';
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = sessionStorage.getItem('userData'); // ou localStorage, se preferir

    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.username = user.username || 'Usuário';
        this.email = user.email || 'Email não encontrado';
      } catch (error) {
        console.error('Erro ao analisar os dados do usuário:', error);
      }
    }
  }

  logout(): void {
    sessionStorage.clear(); // ou localStorage.clear()
    this.router.navigate(['/home']);
    window.location.reload();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  username: string = '';

  ngOnInit(): void {
    const userData = sessionStorage.getItem('userData'); // ou localStorage, se preferir

    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.username = user.username || 'Usuário';
      } catch (error) {
        console.error('Erro ao analisar os dados do usuário:', error);
      }
    }
  }
}

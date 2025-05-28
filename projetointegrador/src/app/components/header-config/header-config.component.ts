import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-config',
  templateUrl: './header-config.component.html',
  styleUrls: ['./header-config.component.scss'],
})
export class HeaderConfigComponent implements OnInit {

 username  = '';

ngOnInit(): void {
  const userData = localStorage.getItem('userData');

  if (userData) {
    try {
      const user = JSON.parse(userData);
      this.username = user.nome || ''; // ajusta o nome conforme a estrutura salva
    } catch (e) {
      console.error('Erro ao analisar userData:', e);
      this.username = '';
    }
  }
}

  @Input() hideSearchInput: boolean = false;
}

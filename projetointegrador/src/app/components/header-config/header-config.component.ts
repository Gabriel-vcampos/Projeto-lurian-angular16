import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-config',
  templateUrl: './header-config.component.html',
  styleUrls: ['./header-config.component.scss'],
})
export class HeaderConfigComponent implements OnInit {

 username  = '';

 constructor(private router: Router) {}

ngOnInit(): void {
  const userData = sessionStorage.getItem('userData');

  if (userData) {
    try {
      const user = JSON.parse(userData);
      this.username = user.username || ''; // ajusta o nome conforme a estrutura salva
    } catch (e) {
      console.error('Erro ao analisar userData:', e);
      this.username = '';
    }
  }
}

logout(): void {
    sessionStorage.clear(); // ou localStorage.clear()
    this.router.navigate(['/home']);
    window.location.reload();
  }

  @Input() hideSearchInput: boolean = false;
}

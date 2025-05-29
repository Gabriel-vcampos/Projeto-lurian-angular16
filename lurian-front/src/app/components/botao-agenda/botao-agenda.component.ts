import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao-agenda',
  templateUrl: './botao-agenda.component.html',
  styleUrls: ['./botao-agenda.component.scss']
})
export class BotaoAgendaComponent implements OnInit {
  userData: any = [];

  ngOnInit(): void {
    const json = sessionStorage.getItem('userData');
    this.userData = json ? JSON.parse(json) : null;
  }
}

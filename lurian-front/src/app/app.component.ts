import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLogComponent } from './components/header-log/header-log.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { TestesComponent } from './pages/testes/testes.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'projeto-integrador';
}

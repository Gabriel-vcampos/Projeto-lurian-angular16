import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const userData = sessionStorage.getItem('userData');

    if (userData) {
      return true;
    } else {
      // Redireciona para login se não estiver logado
      this.router.navigate(['/login']);
      return false;
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Tentando logar com:', loginData);

      this.authService.login(loginData).subscribe({
        next: (res) => {
          console.log(' Login bem-sucedido:', res);
          
        },
        error: (err) => {
          console.error(' Erro no login:', err);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

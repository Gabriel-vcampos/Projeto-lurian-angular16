import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.cadastroForm = this.fb.group({
      username: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['ROLE_ADMIN'],
      profissional: ['ADMIN'],
      contato: ['21982392389'],

      cliente: this.fb.group({
        name: ['123213', Validators.required],
        cpf: ['18350649739', [Validators.required, Validators.pattern(/^\d{11}$/)]],
        dataNascimento: ['1800-06-09', Validators.required],
        endereco: this.fb.group({
          rua: ['RUA ADMIN', Validators.required],
          numero: ['123', Validators.required],
        })
      })
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const dados = this.cadastroForm.value;
      console.log("Dados para envio:", dados);

      this.authService.cadastrarUsuario(dados).subscribe({
        next: (res) => {
          console.log(' Cadastro realizado com sucesso:', res);
          this.router.navigate(['/login']);

        },
        error: (err) => {
          console.error(' Erro no cadastro:', err);
        }
      });

    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }

}

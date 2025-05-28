import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.cadastroForm = this.fb.group({
      username: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['ROLE_USER'],
      profissional: ['Usuário'],
      contato: [''],

      cliente: this.fb.group({
        name: ['', Validators.required],
        cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
        dataNascimento: ['', Validators.required],
        endereco: this.fb.group({
          rua: ['', Validators.required],
          numero: ['', Validators.required],
        })
      })
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const dados = this.cadastroForm.value;
      console.log("Dados para envio:", dados); // esse log já aparece ✅

      this.authService.cadastrarUsuario(dados).subscribe({
        next: (res) => {
          console.log(' Cadastro realizado com sucesso:', res);
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

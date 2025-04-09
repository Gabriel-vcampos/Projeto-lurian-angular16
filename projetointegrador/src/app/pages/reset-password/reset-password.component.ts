import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  email: string = '';
  showConfirmStep: boolean = false;

  // Inputs da segunda etapa
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  resetPassword() {
    if(this.email){
    console.log('Enviando redefinição para:', this.email);
    this.showConfirmStep = true;
  }
    else{
      alert("Email deve ser preenchido!")
      return
    }
  }

  submitNewPassword() {
    console.log('Código:', this.code);
    console.log('Nova senha:', this.newPassword);
    console.log('Confirmar senha:', this.confirmPassword);
    // Aqui vai a lógica de confirmação
  }
}

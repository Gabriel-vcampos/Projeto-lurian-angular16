package com.senac.lurian.usuarios;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoUsuario(
		@NotBlank @Email
	     String email,
		
		@NotBlank
		 String senha,
		
		@NotBlank
		 String username,
		
		@NotNull
		 Role role
		 
		 
		) {

}

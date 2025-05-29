package com.senac.lurian.usuarios;

import com.senac.lurian.cliente.Cliente;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosListagemUsuario( 
		Long id,
		
		@NotBlank @Email
		 String email,
		
		@NotBlank
		 String senha,
		
		@NotBlank
		 String username,
		
		@NotNull
		Role role,
		
		String profissional,
		
		String contato,
		
		
		Cliente cliente
		
		) {
	public DadosListagemUsuario(Usuario usuario) {
		this(usuario.getId(), usuario.getEmail(), usuario.getSenha(), usuario.getUsername(), usuario.getRole(), usuario.getProfissional(), usuario.getContato(), usuario.getCliente());
	}
}

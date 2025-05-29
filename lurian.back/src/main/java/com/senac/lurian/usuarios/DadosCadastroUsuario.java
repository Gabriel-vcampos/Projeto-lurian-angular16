package com.senac.lurian.usuarios;

import com.senac.lurian.cliente.DadosCadastroCliente;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroUsuario(
	    @NotBlank(message = "Username é obrigatório")
	    String username,

	    @NotBlank(message = "Senha é obrigatória")
	    String senha,

	    @NotBlank @Email(message = "Email inválido")
	    String email,

	    @NotNull(message = "Role é obrigatória")
	    Role role,

	    String profissional,
	    String contato,
	    DadosCadastroCliente cliente
	) {}
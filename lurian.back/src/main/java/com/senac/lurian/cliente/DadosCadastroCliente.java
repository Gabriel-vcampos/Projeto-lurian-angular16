package com.senac.lurian.cliente;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.senac.lurian.endereco.DadosEndereco;
import com.senac.lurian.usuarios.DadosCadastroUsuario;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record DadosCadastroCliente(
		@NotBlank
		String name,
		
		@NotNull @Pattern(regexp = "\\d{11}")
		String cpf,
		
		@JsonFormat(pattern = "yyyy-MM-dd")
		@NotNull
		Date dataNascimento,
		
		@NotNull
		DadosEndereco endereco,
		
		@Valid
		 DadosCadastroUsuario usuario
		
		)
{

}

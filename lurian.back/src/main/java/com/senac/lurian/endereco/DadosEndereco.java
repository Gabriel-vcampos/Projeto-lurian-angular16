package com.senac.lurian.endereco;

import jakarta.validation.constraints.NotBlank;

public record DadosEndereco(
		@NotBlank
		String logradouro,
		
		@NotBlank
		String bairro,
		
		@NotBlank
		String cidade,
		
		String cep,
		String complemento,
		String numero
		) {

}

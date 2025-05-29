package com.senac.lurian.cliente;

import java.sql.Date;

import com.senac.lurian.endereco.DadosEndereco;
import com.senac.lurian.usuarios.DadosAtualizacaoUsuario;
 
public record DadosAtualizacaoCliente(
		Long id,
		String name,
		String cpf,
		Date dataNascimento,
		DadosEndereco endereco
		) {
	
	
	
}

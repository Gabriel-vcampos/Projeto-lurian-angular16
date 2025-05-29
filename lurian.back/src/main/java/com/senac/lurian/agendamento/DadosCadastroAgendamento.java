package com.senac.lurian.agendamento;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroAgendamento(
		@NotBlank
		String descricao,
		
		@JsonFormat(pattern = "HH:mm") 
		@NotNull
		LocalTime horaMinuto,
		
		@NotNull
		Status status,
		
		@NotBlank
		String profissional,
		
		@NotBlank
		String contato,
		
		Long clienteId
		) {

	

}

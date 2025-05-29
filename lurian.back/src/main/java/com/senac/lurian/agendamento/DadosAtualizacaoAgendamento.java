package com.senac.lurian.agendamento;
import java.time.LocalTime;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoAgendamento(
		@NotBlank
		String descricao,
		
		@JsonFormat(pattern = "HH:mm")
		LocalTime horaminuto,
		
		@NotNull
		Status status,
		
		String contato,
		
		String profissional
		
		) {



}

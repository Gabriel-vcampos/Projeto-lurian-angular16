package com.senac.lurian.agendamento;

import java.time.LocalTime;


public record DadosListagemAgendamento(
		Long id,
		String descricao,
		LocalTime horaminuto,
		Status status) {
	
	public DadosListagemAgendamento(Agendamento agendamento) {
		this(agendamento.getId(), agendamento.getDescricao(), agendamento.getHoraMinuto(), agendamento.getStatus());
	}

}

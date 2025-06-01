package com.senac.lurian.agendamento;

import java.time.LocalTime;

import com.senac.lurian.cliente.Cliente;
import com.senac.lurian.usuarios.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Table(name = "agendamentos")
@Entity(name = "Agendamento")
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
public class Agendamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Status status;
	private String descricao;
	private LocalTime horaMinuto;
	private String profissional;
	private String contato;
	@ManyToOne
	@JoinColumn(name = "usuario_id", nullable = false)
	private Usuario usuario;

	public Agendamento() {
	}

	public Agendamento(DadosCadastroAgendamento dados, Usuario usuario) {
		this.setStatus(dados.status());
		this.setDescricao(dados.descricao());
		this.setHoraMinuto(dados.horaMinuto());
		this.setProfissional(dados.profissional());
		this.setContato(dados.contato());
		this.usuario = usuario;
	}

	public void atualizarInformacoes(DadosAtualizacaoAgendamento dados) {
		if (dados.descricao() != null) {
			this.descricao = dados.descricao();
		}
		if (dados.status() != null) {
			this.status = dados.status();
		}
		if (dados.horaminuto() != null) {
			this.horaMinuto = dados.horaminuto();
		}
		if (dados.contato() != null) {
			this.contato = dados.contato();
		}
		if (dados.profissional() != null) {
			this.profissional = dados.profissional();
		}

	}

	public LocalTime getHoraMinuto() {
		return horaMinuto;
	}

	public void setHoraMinuto(LocalTime horaMinuto) {
		this.horaMinuto = horaMinuto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProfissional() {
		return profissional;
	}

	public void setProfissional(String profissional) {
		this.profissional = profissional;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}



}

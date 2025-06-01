package com.senac.lurian.usuarios;


import java.util.List;

import com.senac.lurian.agendamento.Agendamento;
import com.senac.lurian.cliente.Cliente;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@EqualsAndHashCode(of = "id")
public class Usuario {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank @Email
	private String email;
	
	@NotBlank
	private String senha;
	
	@NotBlank
	private String username;
	
	@NotNull
	private Role role;
	
	private String profissional;
	
	private String contato;
	
	@OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private Cliente cliente;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Agendamento> agendamentos;
	
	public Usuario() {}
	
    public Usuario(DadosCadastroUsuario dados) {
        this.username = dados.username();
        this.senha = dados.senha();
        this.email = dados.email();
        this.role = dados.role();
        this.profissional = dados.profissional();
        this.contato = dados.contato();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	public void atualizarInformacoes(DadosAtualizacaoUsuario dados) {
		
		if(dados.username() != null) {
			this.username = dados.username();
		}if(dados.senha() != null){
			this.senha = dados.senha();
		}if(dados.email() != null) {
			this.email = dados.email();
		}if(dados.role() != null) {
			this.role = dados.role();
		}
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
	
	public Cliente getCliente() {
	    return cliente;
	}

	public Usuario getUsuario() {
		// TODO Auto-generated method stub
		return null;
	}
	
}

package com.senac.lurian.cliente;

import java.util.Date;
import java.util.List;
import com.senac.lurian.agendamento.Agendamento;
import com.senac.lurian.endereco.Endereco;
import com.senac.lurian.usuarios.Usuario;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Table(name = "clientes")
@Entity(name = "Cliente")
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
public class Cliente {

@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String name;

private Date dataNascimento;


@OneToOne
@JoinColumn(name = "usuario_id", nullable = false, unique = true)
private Usuario usuario;

private Endereco endereco;

private String cpf;

private Boolean ativo;




public Cliente(DadosCadastroCliente dados, Usuario usuario) {
    this.usuario = usuario;  
    this.setName(dados.name());
    this.setDataNascimento(dados.dataNascimento());
    this.setCpf(dados.cpf());
    this.setEndereco(new Endereco(dados.endereco()));
    this.ativo = true;
}


public void atualizarInformacoes(DadosAtualizacaoCliente dados) {
    if (dados.name() != null) {
        this.name = dados.name();
    }
    if (dados.cpf() != null) {
        this.cpf = dados.cpf();
    }
    if (dados.dataNascimento() != null) {
        this.dataNascimento = dados.dataNascimento();
    }
    if (dados.endereco() != null) {  
        this.endereco.atualizarInformacoes(dados.endereco());
    }
}





public void excluir() {
	this.ativo = false;
}




public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public Usuario getUsuario() {
	return usuario;
}
public void setUsuario( Usuario usuario) {
	this.usuario = usuario;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Date getDataNascimento() {
	return dataNascimento;
}
public void setDataNascimento(Date dataNascimento) {
	this.dataNascimento = dataNascimento;
}
public Endereco getEndereco() {
	return endereco;
}
public void setEndereco(Endereco endereco) {
	this.endereco = endereco;
}
public String getCpf() {
	return cpf;
}
public void setCpf(String cpf) {
	this.cpf = cpf;
}
public Boolean getAtivo() {
	return ativo;
}
public void setAtivo(Boolean ativo) {
	this.ativo = ativo;
}



}

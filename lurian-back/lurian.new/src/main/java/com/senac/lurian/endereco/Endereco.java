package com.senac.lurian.endereco;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Endereco {
	
	private String logradouro;
	private String bairro;
	private String numero;
	private String cidade;
	private String cep;
	private String complemento;
	
	public Endereco() {}
	
	public Endereco(DadosEndereco dados) {
		this.setLogradouro(dados.logradouro());
		this.setBairro(dados.bairro());
		this.setNumero(dados.numero());
		this.setCidade(dados.cidade());
		this.setComplemento(dados.complemento());
	}
	
	
	
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getComplemento() {
		return complemento;
	}
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	
	public void atualizarInformacoes(DadosEndereco dados) {
		if(dados.logradouro() != null) {
			this.logradouro = dados.logradouro();
		}
		if(dados.bairro() != null) {
			this.bairro = dados.bairro();
		}
		if(dados.cidade() != null) {
			this.cidade = dados.cidade();
		}
		if(dados.cep() != null) {
		this.cep = dados.cep();
		}
		if(dados.numero() != null) {
			this.numero = dados.numero();
		}
		if(dados.complemento() != null) {
			this.complemento = dados.complemento();
		}
}
}
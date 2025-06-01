package com.senac.lurian.cliente;

import java.util.Date;

import com.senac.lurian.endereco.Endereco;
import com.senac.lurian.usuarios.Usuario;

public record DadosListagemCliente(

        Long id,
        String name,
        String cpf,
        Date dataNascimento,
        Endereco endereco,
        Usuario usuario
        ) { 
   public DadosListagemCliente(Cliente cliente){
        this(cliente.getId(), cliente.getName(), cliente.getCpf(), cliente.getDataNascimento(), cliente.getEndereco(),cliente.getUsuario());
    }}


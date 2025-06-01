package com.senac.lurian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.senac.lurian.agendamento.*;
import com.senac.lurian.cliente.Cliente;
import com.senac.lurian.repository.AgendamentoRepository;
import com.senac.lurian.repository.ClienteRepository;
import com.senac.lurian.repository.UserRepository;
import com.senac.lurian.usuarios.Usuario;

@Service
public class AgendamentoService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    public Agendamento criarAgendamento(DadosCadastroAgendamento dados) {
        Usuario usuario = userRepository.findById(dados.clienteId())
            .orElseThrow(() -> new RuntimeException("Usuario não encontrado"));

        Agendamento ag = new Agendamento();
        ag.setStatus     (dados.status());
        ag.setDescricao  (dados.descricao());
        ag.setHoraMinuto (dados.horaMinuto());
        ag.setProfissional(dados.profissional());
        ag.setContato    (dados.contato());
        ag.setUsuario    (usuario);

        return agendamentoRepository.save(ag);
    }
}
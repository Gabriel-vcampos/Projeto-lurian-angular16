package com.senac.lurian.controller;
import com.senac.lurian.agendamento.Agendamento;
import com.senac.lurian.agendamento.DadosAtualizacaoAgendamento;
import com.senac.lurian.agendamento.DadosAtualizacaoStatus;
import com.senac.lurian.agendamento.DadosCadastroAgendamento;
import com.senac.lurian.agendamento.DadosListagemAgendamento;
import com.senac.lurian.cliente.Cliente;
import com.senac.lurian.repository.AgendamentoRepository;
import com.senac.lurian.repository.ClienteRepository;
import com.senac.lurian.repository.UserRepository;
import com.senac.lurian.service.AgendamentoService;
import com.senac.lurian.usuarios.Usuario;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;
    
    @Autowired
    private UserRepository usuarioRepository;
    @Autowired
    private AgendamentoService agendamentoService;

    @PostMapping("/cadastro")
    @Transactional
    public ResponseEntity<String> cadastrarAgendamento(@RequestBody @Valid DadosCadastroAgendamento dados) {
        agendamentoService.criarAgendamento(dados);
        return new ResponseEntity<>("Agendamento cadastrado com sucesso!", HttpStatus.OK);
    }
    
    
  
    
    @GetMapping("/listar")
    @PreAuthorize("hasRole('ADMIN')")
    public List<DadosListagemAgendamento> listar() {
        return agendamentoRepository.findAll().stream()
                .map(DadosListagemAgendamento::new)
                .toList();
    }
    
    @GetMapping("/listar/{id}")
    public ResponseEntity<DadosListagemAgendamento> encontrarPorId(@PathVariable("id") Long id) {
        Optional<Agendamento> optional = agendamentoRepository.findById(id);

        if (optional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Agendamento agendamento = optional.get();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

       
        if (authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"))) {
            return ResponseEntity.ok(new DadosListagemAgendamento(agendamento));
        }

        
        String username = authentication.getName();
        Usuario usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        Cliente clienteAutenticado = usuario.getCliente();
        if (!agendamento.getUsuario().getId().equals(clienteAutenticado.getId())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return ResponseEntity.ok(new DadosListagemAgendamento(agendamento));
    }
    
    
    @GetMapping("/meus")
    public List<DadosListagemAgendamento> listarMeusAgendamentos() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        Usuario usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        List<Agendamento> agendamentos = agendamentoRepository.findByUsuarioId(usuario.getId());

        return agendamentos.stream()
                .map(DadosListagemAgendamento::new)
                .toList();
    }


    
    @PutMapping("/atualizar/{id}")
    @Transactional
    public ResponseEntity<Void> atualizar(@PathVariable("id") Long id, @RequestBody DadosAtualizacaoAgendamento dados) {
        Agendamento agendamento = agendamentoRepository.getReferenceById(id);
        agendamento.atualizarInformacoes(dados);
        return ResponseEntity.ok().build();
    }

    
    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity<Void> deletar(@PathVariable("id") Long id) {
    	agendamentoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}


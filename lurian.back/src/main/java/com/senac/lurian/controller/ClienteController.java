package com.senac.lurian.controller;

import com.senac.lurian.cliente.Cliente;
import com.senac.lurian.cliente.DadosAtualizacaoCliente;
import com.senac.lurian.cliente.DadosCadastroCliente;
import com.senac.lurian.cliente.DadosListagemCliente;
import com.senac.lurian.repository.ClienteRepository;
import com.senac.lurian.repository.UserRepository;
import com.senac.lurian.usuarios.Usuario;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;
    
   private UserRepository usuarioRepository;

    @PostMapping("/cadastro")
    @Transactional
    public ResponseEntity<String> cadastrarCliente(@RequestBody @Valid DadosCadastroCliente dados) {
        Usuario usuario = new Usuario(dados.usuario());
        usuario = usuarioRepository.save(usuario); // Salva o usuário primeiro
        
        Cliente cliente = new Cliente(dados, usuario);
        cliente.setUsuario(usuario);
        clienteRepository.save(cliente);
        
        return new ResponseEntity<>("Cliente cadastrado!", HttpStatus.OK);
    }
    
    @GetMapping("/listar")
    
    public List<DadosListagemCliente> listar() {
        return clienteRepository.findAllByAtivoTrue().stream().map(DadosListagemCliente::new).toList();
    }

    
    @GetMapping("/listar/{id}")
    public ResponseEntity<DadosListagemCliente> encontrarPorId(@PathVariable("id") Long id) {
        return clienteRepository.findById(id)
                .map(cliente -> ResponseEntity.ok(new DadosListagemCliente(cliente)))
                .orElse(ResponseEntity.notFound().build());
    }

    
    @PutMapping("/atualizar/{id}")
    @Transactional
    public ResponseEntity<Void> atualizar(@PathVariable("id") Long id, @RequestBody DadosAtualizacaoCliente dados) {
        Cliente cliente = clienteRepository.getReferenceById(id);
        cliente.atualizarInformacoes(dados);
        return ResponseEntity.ok().build();
    }

    
    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity<Void> deletar(@PathVariable("id") Long id) {
        clienteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @DeleteMapping("/deletar-logico/{id}")
    @Transactional
    public ResponseEntity<Void> deletarLogico(@PathVariable("id") Long id) {
        Cliente cliente = clienteRepository.getReferenceById(id);
        cliente.excluir();
        return ResponseEntity.noContent().build();
    }
}
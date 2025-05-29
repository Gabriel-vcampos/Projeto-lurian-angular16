package com.senac.lurian.controller;
import com.senac.lurian.repository.UserRepository;
import com.senac.lurian.usuarios.DadosAtualizacaoUsuario;
import com.senac.lurian.usuarios.DadosCadastroUsuario;
import com.senac.lurian.usuarios.DadosListagemUsuario;
import com.senac.lurian.usuarios.DadosLoginUsuario;
import com.senac.lurian.usuarios.Usuario;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/cadastro")
    @Transactional
    public ResponseEntity<Map<String,String>> cadastrarUsuario(
        @RequestBody @Valid DadosCadastroUsuario dados
    ) {
        userRepository.save(new Usuario(dados));
        Map<String,String> resp = Collections.singletonMap(
            "mensagem", 
            "Usuário cadastrado!"
        );
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(resp);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid DadosLoginUsuario dados) {
        var usuarioOptional = userRepository.findByEmail(dados.email());

        if (usuarioOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado");
        }

        var usuario = usuarioOptional.get();

        if (!usuario.getSenha().equals(dados.senha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha incorreta");
        }

        return ResponseEntity.ok(usuario);
    }
    
    @GetMapping("/listar")
    
    public List<DadosListagemUsuario> listar() {
        return userRepository.findAll().stream().map(DadosListagemUsuario::new).toList();
    }

    
    @GetMapping("/listar/{id}")
    public ResponseEntity<DadosListagemUsuario> encontrarPorId(@PathVariable("id") Long id) {
    	return userRepository.findById(id)
                .map(usuario -> ResponseEntity.ok(new DadosListagemUsuario(usuario)))
                .orElse(ResponseEntity.notFound().build());
    	

    }

    
    @PutMapping("/atualizar/{id}")
    @Transactional
    public ResponseEntity<Void> atualizar(@PathVariable("id") Long id, @RequestBody DadosAtualizacaoUsuario dados) {
        var usuario = userRepository.getReferenceById(id);
        usuario.atualizarInformacoes(dados);
        return ResponseEntity.ok().build();
    }

    
    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity<Void> deletar(@PathVariable("id") Long id) {
    	userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}


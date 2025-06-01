package com.senac.lurian.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.senac.lurian.cliente.Cliente;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findAllByAtivoTrue();
    Optional<Cliente> findByUsuarioEmail(String email);
}

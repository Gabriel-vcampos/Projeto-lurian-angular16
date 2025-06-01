package com.senac.lurian.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.senac.lurian.agendamento.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

    List<Agendamento> findByUsuarioId(Long usuarioId);

}

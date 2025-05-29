package com.senac.lurian.usuarios;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record DadosLoginUsuario(
    @NotBlank @Email String email,
    @NotBlank String senha
) {}

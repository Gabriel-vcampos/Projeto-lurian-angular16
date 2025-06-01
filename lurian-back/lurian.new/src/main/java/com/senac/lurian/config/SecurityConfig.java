package com.senac.lurian.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/clientes/**").permitAll()
                .requestMatchers("/agendamentos/**").permitAll()
                .requestMatchers("/usuarios/cadastro").permitAll() // Permite acesso ao cadastro de usuários
                .anyRequest().permitAll() // Mantém o resto acessível
            )
            .httpBasic(Customizer.withDefaults())
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            )
            .logout(logout -> logout.permitAll())
            .csrf(csrf -> csrf.disable()); // Desativa CSRF (opcional, útil para testes)

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return userDetailsService;
    }
}
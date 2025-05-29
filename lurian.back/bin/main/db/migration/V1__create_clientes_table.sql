CREATE TABLE clientes(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	cpf  VARCHAR(11) NOT NULL UNIQUE,
	dataNascimento VARCHAR(25) NOT NULL,
 	logradouro VARCHAR(255),
    numero VARCHAR(6),
    bairro VARCHAR(255),
    cidade VARCHAR(255),
    cep VARCHAR(10),
    complemento VARCHAR(100)
);
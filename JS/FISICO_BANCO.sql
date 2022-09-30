CREATE DATABASE banco_do_barasil;
USE banco_do_barasil;

CREATE TABLE clientes (
nome varchar(255),
senha varchar(255),
id_cliente int PRIMARY KEY AUTO_INCREMENT,
email varchar(255)
);

CREATE TABLE agencia (
numero_agencia int PRIMARY KEY AUTO_INCREMENT,
ativos decimal(50,2)
);

CREATE TABLE funcionarios (
staff int PRIMARY KEY AUTO_INCREMENT,
nome varchar(255),
senha varchar(255),
email varchar(255)
);

CREATE TABLE conta (
numero_conta int PRIMARY KEY AUTO_INCREMENT,
saldo decimal(50,2),
id_cliente int,
numero_agencia int,
FOREIGN KEY(id_cliente) REFERENCES clientes (id_cliente),
FOREIGN KEY(numero_agencia) REFERENCES agencia (numero_agencia)
);

CREATE TABLE contrato (
numero_contrato int PRIMARY KEY AUTO_INCREMENT,
data_contrato date,
staff int,
numero_agencia int,
FOREIGN KEY(staff) REFERENCES funcionarios (staff),
FOREIGN KEY(numero_agencia) REFERENCES agencia (numero_agencia)
);


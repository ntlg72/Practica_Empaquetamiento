CREATE DATABASE IF NOT EXISTS productosDB;
CREATE DATABASE IF NOT EXISTS usuariosDB;
CREATE DATABASE IF NOT EXISTS ordenesDB;

USE productosDB;
CREATE TABLE productos (
  id INT AUTO_INCREMENT,
  nombre VARCHAR(20),
  precio FLOAT,
  inventario INT,
  PRIMARY KEY (id)
);

USE usuariosDB;
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT,
  nombre VARCHAR(20),
  usuario VARCHAR(10),
  password VARCHAR(20),
  email VARCHAR(50),
  PRIMARY KEY (id)
);

USE ordenesDB;
CREATE TABLE ordenes (
  idOrdenes INT AUTO_INCREMENT,
  numeroCliente INT,
  fecha DATETIME,
  total FLOAT,
  PRIMARY KEY (idOrdenes)
);

USE usuariosDB;
INSERT INTO usuarios (nombre, usuario, password, email) VALUES 
('Administrador', 'admin', '1234', 'admin@example.com'), 
('Usuario 1', 'u1', '1111', 'u1@example.com');

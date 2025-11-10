CREATE DATABASE api_crud;
USE api_crud;
CREATE TABLE alunosMagll (
 id INT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  idade INT,
  peso DECIMAL(5,2),
  objetivo VARCHAR(100)
);

INSERT INTO alunosMagll (id, nome, email, idade, peso, objetivo) VALUES
(1, 'Ana Laura', 'ana.laura@email.com', 17, 65.0, 'Ganhar massa muscular'),
(2, 'Laura Martins', 'laura.martins@email.com', 18, 59.5, 'Definir o corpo'),
(3, 'Pedro Alves', 'pedro.alves@email.com', 20, 72.3, 'Perder peso'),
(4, 'Camila Rocha', 'camila.rocha@email.com', 19, 62.8, 'Melhorar resistência'),
(5, 'Rafael Souza', 'rafael.souza@email.com', 22, 80.1, 'Aumentar força'),
(6, 'Mariana Lima', 'mariana.lima@email.com', 21, 54.7, 'Ganhar massa'),
(7, 'Lucas Pereira', 'lucas.pereira@email.com', 24, 85.4, 'Reduzir gordura'),
(8, 'Bianca Torres', 'bianca.torres@email.com', 18, 60.2, 'Definir abdômen');

SELECT * FROM alunosMagll;

CREATE DATABASE validacao;

CREATE TABLE palavras_validas (
    palavra VARCHAR(50)
);


CREATE PROCEDURE inserir_select(palavra_input VARCHAR(50))
BEGIN
    IF LOWER(palavra_input) = 'select' THEN
        INSERT INTO palavras_validas (palavra) VALUES (palavra_input);
    ELSE
        SELECT 'Palavra inválida. Somente SELECT é permitido.' AS mensagem;
    END IF;
END 



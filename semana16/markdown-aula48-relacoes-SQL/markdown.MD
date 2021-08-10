### 1 

**a) A FOREIGN KEY é uma chave que está atrelada a outra tabela.

**b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
    "001",
    "Muito bom!",
    7,
    "004"
);

**c) EXECUTE FAIL:


  ** ele explica que este id ou filme não existe e por isso não é possível fazer a iteração.

  ***d) ALTER TABLE Movie DROP COLUMN rating;

  **e) Não é possível executar essa ação pois está ação implicaria em remover todos os comentários, por isso o mysql impede que a deleção seja feita. Para remover o filme seria necessário remover as avaliações.

  ### 2 

  **a) Elecria tabeça MovieCast que tem a inserção de filme e do ator com duas chaves referenciadas em outra tabela.

  **b) 
  INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

**c) EXECUTE FAIL:

  INSERT INTO MovieCast(movie_id, actor_id) VALUES( "008" )

Message :

  Column count doesn't match value count at row 1

  ** não foi possível encontrar o valor descrito na coluna.

  **d) não é possível deletar o Ator, pois ele está relacionado a outras tabelas.


  ### 3 

  **a) a query acuma seleciona a tabela de filmes e busca os comentarios com a condição de o filme e e o comentario terem o mesmo id de filme. O operador on é uma cláusula que serve para especificar condiçoes arbitrárias ou especificar colunas a serem unidas.

  **b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;


## segunda parte 


### 4

***a) SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

**b) SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

**c) SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

## 5

**a) Esta query seleciona a tabela de filmes, ela ve as informações da tabela a esquerda MovieCast que tem o movieCast.id e o movieCast.movie_id iguais, depois ele pega as informações da tabela Actor que tem o id do ator e o movieCast.actor_id  iguais. Porque o JOIN consegue juntar as informações de todas as tabelas e oorganizar em uma só.

**b) SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

**c) Ela retorna o id do filme na tabela da esquerda em seguida do nome do filme e na tabela direita retorna o id do ator em seguida seu nome. 

**d) SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
);

** Os que não tem comentários ele retorna como null

### 6 

**a) Vários para vários 

**b) CREATE TABLE Oscar (
	id VARCHAR(250) primary key,
	name VARCHAR(250) not null,
    date DATE not null
);

**c) INSERT INTO Oscar(id, name, date) VALUES(
    "004",
    "O Auto da Compadecida",
    "0200-09-10"
);



INSERT INTO Oscar(id, name, date)
VALUES(
    "002",
    "Melhor filme",
    "2021-12-27"
);

INSERT INTO Oscar(id, name, date)
VALUES(
    "003",
    "Melhor direção",
    "2017-11-02"
);

*** d)
SELECT m.title, m.synopsis, m.release_date, m.playing_limit_date, release_date, o.name FROM Movie m
LEFT JOIN MovieOscar mo ON m.id = mo.movie_id
LEFT JOIN Oscar o ON o.id = mo.oscar_id;
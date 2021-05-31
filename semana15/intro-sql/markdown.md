  ## Exercício 1
  
  CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
  )

  ## a)
  ** O comando CREATE TABLE serve para criar a tabela e em seguida devemos colocar o nome que será dado a tabela que iremos criar. Dentro do parenteses devemos definir os nomes dos campos a ser preenchidos na tabela e depois especificar que tipo de dados eles irão receber.

  ** O VARCHAR é uma variável utilizada para um conjunto de dados tanto números quanto strings, quando utilizado sozinho sem especificações ele tem um comprimento indeterminado e com especificações dentro de () pode se determinar o número de caracteres que ele irá receber.

  ** A PRIMARY KEY serve para criar um id e identificar os dados do escopo de uma tabela de forma que cada escopo tenha um id diferente.

  ** O NOT NULL serve para especificar que aquele espaço precisa ser preenchido.

  ** FLOAT indica que aquele espaço recebe números não inteiros.

  **DATE recebe o formato data. 

## b) 

** O comando SHOW DATABASES  nos mostra as databases criadas em nosso schema.

**O SHOW TABLES  nos mostra as tabelas criadas dentro da database

## c) 

** O comando DESCRIBE  nos mostra os nomes setados e o tipo de dados que eles recebem.

## 2 

** a) 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

** b) 

*Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'*, ou seja, temos uma entrada duplicada.
​
**c)

*A contagem da coluna não corresponde ao valor da linha*

** d) 
*Inserido com sucesso!*

**e) 

*Você tem um erro em sua sintaxe SQL; verifique o manual que corresponde à versão do seu servidor MySQL para obter a sintaxe correta para usar próximo a 'UNSERT INTO Actor (id, nome, slary, data de nascimento, gênero) VALUE ("005", "Juliana P' na linha 1*

**f) 
**INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);**

** INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "004",
    "Antônio Fagundes",
    400000,
    "1949-04-18",
    "male"
);**

**INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);**

## 3)

**a)
*SELECT id, name from Actor WHERE gender = "female";*

**b) 
*SELECT id, salary from Actor WHERE name = "Tony Ramos";*

**c)
*Veio uma coluna sem dados*

**d)
*EXECUTE FAIL:

  SELECT id, name from Actor WHERE salary = MAX("500000")

Message :

  Invalid use of group function*

  **e) 
  *Coluna nome desconhecida*
**Corrigindo
*Aparece uma coluna vazia porque não tem id "002" criado.*

# 4

**a) 

** A query irá buscar os valores que correspondem a "A ou J" e que tenha um salário maior que 300000

**b)

SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;

** c)

**
 SELECT * FROM Actor 
 WHERE name LIKE "%G%" or "%g%";

 **d)

 **SELECT * FROM Actor 
 WHERE (name LIKE "%g%" OR  name LIKE "%G%" OR name LIKE "%%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 90000;

 # 5
 **a) 
 **CREATE TABLE Movie(
   id VARCHAR(255) PRIMARY KEY,
   title VARCHAR(255) NOT NULL UNIQUE,
   synopsis TEXT NOT NULL,
   release_Date DATE NOT NULL,
   rating INT NOT NULL
 );

 ** b)
 INSERT  INTO Movie (id, title, synopsis, release_Date, rating)
 VALUES(
   "001",
   "Se eu fosse você",
   "Cláudio e Helena são casdos há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um evento inexplicável e trocam de corpos.",
   "2006-01-06",
   7
 );

 **c)

 INSET INTO Movie (id, title, synopsis, release_Date, rating)
 VALUES(
   "002",
   "Doce mãe",
   "Dona Picucha, uma senhora animada  de 85  anos, sempre causa grandes confusões. A vida dela e de seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
   "2012-12-27",
   10
 );

 **d)

 INSERT INTO Movie (id, title, synopsis, release_Date, rating)
 VALUES(
   "003",
   "Dona Flor e Seus Dois Maridos",
   "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
   "2017-11-02",
   8
 );

 **e)
 INSERT INTO Movie (id, title, synopsis, release_Date, rating)
 VALUES(
   "004",
   "O Auto da Compadecida",
   "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba.",
   "2000-09-10",
   10
 );

 # 6 

 **a) 
  ** SELECT id, title, rating FROM Movie WHERE id = "004";

  **b) 
  SELECT * FROM Movie WHERE name = "Deus é brasileiro";
   **Unknown column 'name' in 'where clause'**

   **c)

   SELECT id, title, synopsis FROM Movie WHERE rating > 7;

   # 7 
   ** a)
   SELECT * FROM Movie 
   WHERE title LIKE "%vida%";
   *Nenhum valor retornado*

   ** b) 
   SELECT * FROM Movie 
   WHERE title LIKE "%TERMO DE BUSCA%" OR 
   synopsis LIKE "%TERMO DE BUSCA%";
   *Nenhum valor retornado*

   **c) 
   SELECT * FROM MOVIE
   WHERE release_date < "2020-05-04";
   *Tabela não existente*

   **d) 
   SELECT * FROM MOVIE 
   WHERE release_date < "2020-05-04" AND 
   (title LIKE "%TERMO DE BUSCA%" OR 
   synopsis LIKE "%TERMO DE BUSCA%") AND rating < 7;
   *Nenhum dos valores são existentes*





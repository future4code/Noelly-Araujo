# 1

**a) Ele altera a coluna Actor e apaga a coluna salary

**b) Altera a tabela Actor e muda o valor de gender para sex

**c) Altera a tabela Actor e troca o valor de gender VARCHAR de 6 para 255

**d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
*AffectedRows: 4*

# 2

**a) UPDATE Actor
SET 
name = "MoacyrFranco"
birth_Date = "2020-02-10"
WHERE id = "003";

**b)UPDATE Actor 
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"

UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

**c) UPDATE Actor 
SET name = "Moacyr Franco"
birth_Date = "2020-02-10"
salary = 60000
gender = "male"
WHERE id = "005";

# 3
**a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

**b) DELETE FROM Actor WHERE 
gender = "male" AND
salary > 100000000;

# 4
**a) SELECT MAX(salary) FROM Actor;

**b) SELECT MIN(salary) FROM Actor gender "female";

**c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

**d) SELECT SUM(salary) FROM Actor;

# 5
**a)  Ele retorna uma tabela com a quantidade em cada coluna

**b) SELECT id, name FROM Actor 
ORDER BY name DESC;

**c) SELECT * FROM Actor 
ORDER BY salary;

**d) SELECT * FROM Actor 
ORDER BY salary DESC 
LIMIT 3;

**e) SELECT AVG(salary), gender FROM Actor 
GROUP BY gender;

# 6 
**a) ALTER TABLE Movie ADD playing_limit_date DATE;

**b) ALTER TABLE Movie CHANGE rating rating FLOAT;

**c)UPDATE Movie 
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2021-08-22"
WHERE id = "003";


**d) DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET synopsis = "Mudei a sinopse"
WHERE id = "001";

*Atualizou normalmente, não mostrou erros*

# 7 
**a) apareceu em uma tabela na primeira coluna 1 e na segunda 3

**b) 9.333333333333334

**c) SELECT COUNT(*) FROM Movie 
WHERE playing_limit_date > CURDATE();

**d) *Única coluna com o número 1*

**e) *10*

**f) *8*

# 8 
**a) SELECT * FROM Movie 
ORDER BY title;

**b) SELECT * FROM Movie
ORDER BY title LIMIT 5;

**c) SELECT * FROM Movie 
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

**d) SELECT * FROM Movie 
ORDER BY rating DESC
LIMIT 3;
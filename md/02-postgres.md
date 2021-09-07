<h2 align="center">P O S T G R E S Q L</h2>

## Setting up commands

|                   **Query**                                               |            **Purpose**                                                            |
|:--------------------------------------------------------------------------|:----------------------------------------------------------------------------------|
| postgres=# **CREATE USER** "name" **WITH PASSWORD** "password";           | Create a user with "name" as username and "password" as password                  |
| postgres=# **CREATE DATABASE** name;                                      | Create a database with name name                                                  |
| postgres=# **GRANT ALL PRIVILEGES ON DATABASE** devs **TO** abc;          | Grant total access to user to a database. ALL can be modified to read/write etc.  |
| postgres=# **DROP DATABASE IF EXISTS** name;                              | Deletes a database called name if it exists.                                      |
| postgres=# **\list**                                                      | Displays the list of databases.                                                   |
| postgres=# **\connect** dbname                                            | Connect to the database db_name                                                   |
| dbname=# **\dt**                                                          | Displays a list of table when connected to a database.                            |
| dbname=# **\d**                                                           | Displays a list of relations tables in the database.                              |
| dbname=# **\d** dbname2                                                   | Displays a list of relations tables in the dbname2.                               |


## Creating a table

```sql
CREATE TABLE LEARN(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR(50),
    SALARY REAL
);
```

## Create a schema

```sql
CREATE SCHEMA testschema;

CREATE TABLE testschema.finance(
    ...
);

DROP SCHEMA testschema CASCADE;

```

## INSERT in SQL

```sql
INSERT INTO TABLE(col1, col2, col3, col4) VALUES (val1, val2, val3, val4);


```

## SELECT in SQL

```sql

SELECT * FROM COMPANY;

SELECT NAME FROM COMPANY;

SELECT COUNT(*) AS "RECORDS" FROM COMPANY;

SELECT CURRENT_TIMESTAMP;

SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY < 100000;

SELECT * FROM COMPANY WHERE SALARY IS NOT NULL;

SELECT * FROM COMPANY WHERE NAME LIKE 'A%';

SELECT * FROM COMPANY WHERE NAME LIKE '_A_V%';

SELECT * FROM COMPANY WHERE SALARY::TEXT LIKE '269%';

```


## UPDATE in SQL

```sql

UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;

```

## DELETE in SQL

```sql

DELETE COMPANY SET SALARY = 15000 WHERE ID = 3;

```

## GENERATED AS IDENTITY, PRIMARY KEY AND FOREIGN KEY

```sql

CREATE TABLE customers(
   customer_id INT GENERATED ALWAYS AS IDENTITY,
   customer_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(customer_id)
);

CREATE TABLE contacts(
   contact_id INT GENERATED ALWAYS AS IDENTITY,
   customer_id INT,
   contact_name VARCHAR(255) NOT NULL,
   phone VARCHAR(15),
   email VARCHAR(100),
   PRIMARY KEY(contact_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(customer_id)
	  REFERENCES customers(customer_id)
	  ON DELETE CASCADE

```


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

```
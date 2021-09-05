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
| dbname=# **\d** dbname2                                                   | Displays a list of relations tables in the dbname2.                    |

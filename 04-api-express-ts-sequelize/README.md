# PROJECT SETUP

## Installations

- Postgres

## DATABASE SETUP

Create a new super-user
```sql
CREATE ROLE user_cool LOGIN SUPERUSER PASSWORD '123456';
```

Create the database
```sql
CREATE DATABASE db_cool;
```

Grante access to the user
```sql
GRANT CONNECT ON DATABASE db_cool TO user_cool;
```
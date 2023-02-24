CREATE DATABASE todoapp;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,  --SERIAL: autoincrement
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(30)
)

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
)

INSERT INTO tasks (user_email, title, progress, date) VALUES ('FRANCO', 'first task', 10, now()) --now() fecha actual

INSERT INTO users (email, hashed_password) VALUES ('franco@task', '123456') 

DELETE FROM table WHERE id IN (1, 4, 6, 7)
DROP TABLE table_name;
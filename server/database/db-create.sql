CREATE DATABASE todoapp;

CREATE TABLE prueba (
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

INSERT INTO prueba (user_email, title, progress, date) VALUES ('FRANCO', 'first task', 10, now()) --now() fecha actual
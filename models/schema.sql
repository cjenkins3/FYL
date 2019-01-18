CREATE DATABASE finesse_db;

USE finesse_db;

CREATE TABLE users {
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    id INTEGER(30) NOT NULL,
    PRIMARY KEY (id)
};

CREATE TABLE goals {
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(200) NOT NULL,
    date DATE(YYYY-MM-DD) NOT NULL,
    PRIMARY KEY (id) 
}
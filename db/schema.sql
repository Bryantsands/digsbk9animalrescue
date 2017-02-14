CREATE DATABASE dogs_db;
USE dogs_db;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT,
    dog_name varchar(255) NOT NULL,
    unavailable BOOL DEFAULT false,
    PRIMARY KEY (id)
);

CREATE DATABASE digsbUsers_db;
USE digsbUsers_db;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
)
DROP DATABASE IF EXISTS clubsoda_db;
CREATE DATABASE clubsoda_db;
USE clubsoda_db;

CREATE TABLE  user(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50),
    password VARCHAR(30),
    club_id VARCHAR(50),
    isAdmin BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE  events(
    id INT NOT NULL AUTO_INCREMENT,
    event VARCHAR(30),
    date_of DATE NOT NULL,
    start_at TIME (0) NOT NULL,
    end_at TIME (0) NOT NULL,
    club_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE  clubs(
    id INT NOT NULL AUTO_INCREMENT,
    club_name VARCHAR(50),
    club_description VARCHAR(200),
    PRIMARY KEY (id)
);
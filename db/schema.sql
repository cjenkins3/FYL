
CREATE DATABASE IF NOT EXISTS finesse_db;

USE finesse_db;


DROP TABLE if exists users;
-- Create a users table with the required fields --
CREATE TABLE users (
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
insert into users
(userName,
userPassword,
email)
values ('aseatts','password1','avangaea@gmail.com')
;

DROP TABLE if exists goals;
-- Create a goals table with the required fields --
CREATE TABLE goals (
    id INTEGER(30) AUTO_INCREMENT NOT NULL,
    userID int not null,
    goalName VARCHAR(255) NOT NULL,
    goalType VARCHAR(255) NOT NULL,
    goalDescription VARCHAR(255) NOT NULL,
    goalComplete BOOLEAN DEFAULT FALSE,
  	dueDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	createDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updateDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id) 
);

-- Creating seed data for the finess_db database --
INSERT INTO goals (/* id */
                   userID ,
                   goalName, 
                   goalType ,
                   goalDescription,
                   dueDate 
				
                   )
                   
                   values ( 
                   '1'
                   , 'Bring The Zing'
                   , 'Personal Development'
                   , 'By the due date I would like to bring the zing. The zing is the spice of life smiles to person that is down. Laughter to a child or wags to a puppy. Everyday find a way to share communicable happinesss.', 
					CONVERT("2019-01-01", DATE) 
				);

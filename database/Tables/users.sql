USE decore;

create table users(
userId VARCHAR(255) PRIMARY KEY NOT NULL, 
roleName VARCHAR(255) NOT NULL,
userName VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE,
password VARCHAR(255)
);


select * from users;

DROP TABLE users;
USE CitizenConnect;

create table views(
viewId VARCHAR(255) PRIMARY KEY NOT NULL, 
userId VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
summary VARCHAR(255),
FOREIGN KEY (userId) REFERENCES users(userId)
);


select * from views;

DROP TABLE views;
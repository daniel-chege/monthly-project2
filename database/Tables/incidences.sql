USE CitizenConnect;

create table incidences(
inId VARCHAR(255) PRIMARY KEY NOT NULL, 
userId VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
image VARBINARY(MAX),
summary VARCHAR(255),
FOREIGN KEY (userId) REFERENCES users(userId)
);


select * from incidences;

DROP TABLE incidences;
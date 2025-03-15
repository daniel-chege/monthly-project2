USE CitizenConnect;

create table polls(
pollId VARCHAR(255) PRIMARY KEY NOT NULL, 
userId VARCHAR(255) NOT NULL,
-- roleId VARCHAR(255) NOT NULL,
question VARCHAR(255) NOT NULL,
options VARCHAR(255) NOT NULL,
responses VARCHAR(255),
results VARCHAR(255),
FOREIGN KEY (userId) REFERENCES users(userId),
-- FOREIGN KEY (roleId) REFERENCES roles(roleId)
);


select * from polls;

DROP TABLE polls;
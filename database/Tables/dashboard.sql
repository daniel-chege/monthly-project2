USE CitizenConnect;

CREATE TABLE dashboard (
    dashboardId VARCHAR(255) PRIMARY KEY NOT NULL, 
    userId VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    history VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId)
);



select * from dashboard;

DROP TABLE dashboard;
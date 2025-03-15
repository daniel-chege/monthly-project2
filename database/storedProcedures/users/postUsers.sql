USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE postuser(
@userId VARCHAR(255), 
@userName VARCHAR(255),
@email VARCHAR(255),
@roleName VARCHAR(255),
@phoneNumber VARCHAR(255),
@age VARCHAR(255),
@gender VARCHAR(255),
@password VARCHAR(255))
AS
BEGIN
INSERT INTO users(userId, userName, email, roleName, age, phoneNumber, gender, password) 
VALUES(@userId, @userName, @email, @roleName, @phoneNumber, @gender, @age, @password)
END
GO
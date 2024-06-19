USE backend;
GO
CREATE OR ALTER PROCEDURE postuser(
@userId VARCHAR(255), 
@userName VARCHAR(255))
AS
BEGIN
INSERT INTO users(userId, userName) 
VALUES(@userId, @userName)
END
GO
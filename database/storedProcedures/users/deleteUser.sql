USE CitizenConnect;

GO
CREATE OR ALTER PROCEDURE deleteUser(@userId VARCHAR(255))
AS
BEGIN
Delete FROM users WHERE userId=@userId;
END
GO
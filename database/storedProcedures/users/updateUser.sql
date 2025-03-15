USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE updateuser(
@password VARCHAR(255),
@email VARCHAR(255))
AS
BEGIN
UPDATE users SET password=@password WHERE email=@email
END
GO
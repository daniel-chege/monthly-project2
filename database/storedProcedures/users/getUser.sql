USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getuser(
@email VARCHAR(255))
AS
BEGIN
SELECT * FROM users WHERE email=@email;
END
GO
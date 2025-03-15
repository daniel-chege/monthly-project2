USE CitizensConnect;

GO
CREATE OR ALTER PROCEDURE deleterole(@roleId VARCHAR(255))
AS
BEGIN
Delete FROM role WHERE roleId = @roleId;
END
GO
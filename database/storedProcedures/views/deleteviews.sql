USE CitizensConnect;

GO
CREATE OR ALTER PROCEDURE deleteviews(@viewId VARCHAR(255))
AS
BEGIN
Delete FROM views WHERE viewsId = @viewsId;
END
GO
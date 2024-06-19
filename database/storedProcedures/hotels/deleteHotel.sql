USE backend;

GO
CREATE OR ALTER PROCEDURE deleteHotel(@hotelsId VARCHAR(255))
AS
BEGIN
Delete FROM hotels WHERE hotelsId=@hotelsId;
END
GO
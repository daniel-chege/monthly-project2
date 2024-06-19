USE backend;

GO
CREATE OR ALTER PROCEDURE deleteTour(@toursId VARCHAR(255))
AS
BEGIN
Delete FROM tours WHERE toursId=@toursId;
END
GO
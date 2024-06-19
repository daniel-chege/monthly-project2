USE backend;

GO
CREATE OR ALTER PROCEDURE updateTour(@tourId VARCHAR(255), @tourName VARCHAR(255))
AS
BEGIN
UPDATE tours SET tourName=@tourName WHERE tourId=@tourId
END
GO
USE backend;
GO
CREATE OR ALTER PROCEDURE getTours(
@tourIdId VARCHAR(255), 
@tourName VARCHAR(255),
@tourprice INT)
AS
BEGIN
SELECT * FROM tours WHERE tourId=@tourId;
END
GO
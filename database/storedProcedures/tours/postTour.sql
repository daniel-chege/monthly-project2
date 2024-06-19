USE backend;
GO
CREATE OR ALTER PROCEDURE postBook(
@tourId VARCHAR(255), 
@tourName VARCHAR(255),
@tourprice INT)
AS
BEGIN
INSERT INTO tours(tourId, tourName, tourprice) 
VALUES(@tourId, @tourName, @tourprice)
END
GO
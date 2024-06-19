USE backend;
GO
CREATE OR ALTER PROCEDURE getBook(
@bookingId VARCHAR(255), 
@userName VARCHAR(255),
@price INT,
@userEmail VARCHAR(255))
AS
BEGIN
SELECT * FROM booking WHERE bookingId=@bookingId;
END
GO
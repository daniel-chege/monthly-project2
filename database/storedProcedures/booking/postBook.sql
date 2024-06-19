USE backend;
GO
CREATE OR ALTER PROCEDURE postBook(
@bookingId VARCHAR(255), 
@userName VARCHAR(255),
@price INT,
@userEmail VARCHAR(255))
AS
BEGIN
INSERT INTO booking(bookingId, userName, price, userEmail) 
VALUES(@bookingId, @userName, @price, @userEmail)
END
GO
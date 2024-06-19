USE backend;

GO
CREATE OR ALTER PROCEDURE updateBooking(@bookingId VARCHAR(255), @userName VARCHAR(255))
AS
BEGIN
UPDATE boooking SET userName=@userName WHERE bookingId=@bookingId;
END
GO
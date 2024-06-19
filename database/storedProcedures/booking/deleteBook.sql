USE backend;

GO
CREATE OR ALTER PROCEDURE deletebooking(@bookingId VARCHAR(255))
AS
BEGIN
Delete FROM booking WHERE bookingId = @bookingId;
END
GO
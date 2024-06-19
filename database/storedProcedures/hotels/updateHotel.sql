USE backend;

GO
CREATE OR ALTER PROCEDURE updateHotel(
@hotelId VARCHAR(255),
@hotelName VARCHAR(255))
AS
BEGIN
UPDATE hotels SET hotelName=@hotelName WHERE hotelId=@hotelId
END
GO
USE backend;
GO
CREATE OR ALTER PROCEDURE postHotel(
@hotelId VARCHAR(255), 
@hotelName VARCHAR(255),
@hotelprice INT)
AS
BEGIN
INSERT INTO hotels(hotelId, hotelName, hotelprice) 
VALUES(@hotelId, @hotelName, @hotelprice)
END
GO
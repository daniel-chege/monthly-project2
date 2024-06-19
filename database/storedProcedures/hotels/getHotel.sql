USE backend;
GO
CREATE OR ALTER PROCEDURE gethoteltel(
@hotelId VARCHAR(255), 
@hotelName VARCHAR(255),
@hotelprice INT)
AS
BEGIN
SELECT * FROM hotels  WHERE hotelId=@hotelId;
END
GO
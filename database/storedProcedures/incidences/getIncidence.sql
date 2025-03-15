USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getincidence(
@inId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
SELECT * FROM incidences WHERE inId=@inId;
END
GO
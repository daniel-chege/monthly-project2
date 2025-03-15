USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE postincidence(
@inId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
INSERT INTO incidences(inId, userId, description) 
VALUES(@inId, @userId, @description)
END
GO
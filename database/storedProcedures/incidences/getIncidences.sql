USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getincidences(
@incidenceId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
SELECT * FROM incidences;
END
GO
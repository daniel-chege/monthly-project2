USE CitizensConnect;

GO
CREATE OR ALTER PROCEDURE deleteincidences(@incidenceId VARCHAR(255))
AS
BEGIN
Delete FROM incidences WHERE inId = @inId;
END
GO
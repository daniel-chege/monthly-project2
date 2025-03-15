USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getdashboards(
@dashboardId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
SELECT * FROM dashboard;
END
GO
USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE postdashboard(
@dashboardId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
INSERT INTO dashboard(dashboardId, userId, description) 
VALUES(@dashboardId, @userId, @description)
END
GO
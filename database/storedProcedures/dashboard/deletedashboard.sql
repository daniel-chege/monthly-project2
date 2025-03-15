USE CitizenConnect;

GO
CREATE OR ALTER PROCEDURE deletedashboard(@dashboardId VARCHAR(255))
AS
BEGIN
Delete FROM dashboard WHERE dashboardId=@dashboardId;
END
GO
USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE postview(
@viewId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
INSERT INTO views(viewId, userId, description) 
VALUES(@viewId, @userId, @description)
END
GO
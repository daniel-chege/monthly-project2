USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getview(
@viewId VARCHAR(255), 
@userId VARCHAR(255),
@description VARCHAR(255))
AS
BEGIN
SELECT * FROM views WHERE viewId=@viewId;
END
GO
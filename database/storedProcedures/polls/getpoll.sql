USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE getpoll(
@pollId VARCHAR(255), 
@userId VARCHAR(255),
@options VARCHAR(255))
AS
BEGIN
SELECT * FROM poll WHERE pollId=@pollId;
END
GO
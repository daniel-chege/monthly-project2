USE CitizenConnect;
GO
CREATE OR ALTER PROCEDURE AddPoll
    @pollId VARCHAR(255),
    @userId VARCHAR(255),
    @question VARCHAR(255),
    @options VARCHAR(255)
AS
BEGIN
    INSERT INTO polls (pollId, userId, question, options)
    VALUES (@pollId, @userId, @question, @options);
END;

GO
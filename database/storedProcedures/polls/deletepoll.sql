USE CitizenConnect;

GO
CREATE OR ALTER PROCEDURE DeletePoll
    @pollId VARCHAR(255)
AS
BEGIN
    DELETE FROM polls WHERE pollId = @pollId;
END;

GO
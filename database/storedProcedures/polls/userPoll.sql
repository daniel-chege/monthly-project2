USE CitizenConnect;
GO
CREATE Or ALTER PROCEDURE GetUserRole
    @userId VARCHAR(255)
AS
BEGIN
    SELECT roleName FROM users WHERE userId = @userId;
END;


GO
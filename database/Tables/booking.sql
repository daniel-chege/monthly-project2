USE backend;

create table booking(
bookingId VARCHAR(255) PRIMARY KEY,
userName VARCHAR(255) NOT NULL,
bookPrice INT NOT NULL,
userEmail VARCHAR(255) NOT NULL
);
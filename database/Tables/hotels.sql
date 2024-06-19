USE backend;

create table hotel(
hotelId VARCHAR(255) PRIMARY KEY,
hotelName VARCHAR(255) NOT NULL,
hotelPrice INT NOT NULL,
tourId VARCHAR NOT NULL,
FOREIGN KEY (tourId) REFERENCES tours(tourId)

);
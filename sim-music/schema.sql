CREATE TABLE songs (
    id serial,
    song varchar(50),
    artist varchar(50),
    album varchar(50),
    PRIMARY KEY ("id")
);

CREATE TABLE listener (
    id serial,
    name varchar(50)
    PRIMARY KEY ("id")
);
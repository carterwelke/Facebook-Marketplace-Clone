-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS account;
CREATE TABLE account(userInfo jsonb);

DROP TABLE IF EXISTS listing;
CREATE TABLE listing(imageInfo jsonb);
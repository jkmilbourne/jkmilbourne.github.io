--Project 2
--SWDV 220
--Joshus Milbourne
USE master;
go

DROP DATABASE IF EXISTS disk_inventoryJM;
go

CREATE DATABASE disk_inventoryJM;
go

USE disk_inventoryJM;

CREATE TABLE artistType(
	artistTypeCode	INT NOT NULL IDENTITY PRIMARY KEY,
	artistTypeDesc	VARCHAR(255) NOT NULL
	);

CREATE TABLE artist(
	artistID		INT NOT NULL IDENTITY PRIMARY KEY,
	artistFName		VARCHAR(60) NULL,
	artistTypecode	INT NOT NULL REFERENCES artistType(artistTypeCode)
	);

CREATE TABLE borrower(
	borrowerID		INT NOT NULL IDENTITY PRIMARY KEY,
	fname			VARCHAR(255) NOT NULL,
	mi				VARCHAR(10),
	lname			VARCHAR(255) NOT NULL,
	nameSuffix		VARCHAR(10),
	phone			VARCHAR(20)
	);

CREATE TABLE diskHasBorrower(
	diskHasBorrowerID	INT NOT NULL IDENTITY PRIMARY KEY,
	
	);



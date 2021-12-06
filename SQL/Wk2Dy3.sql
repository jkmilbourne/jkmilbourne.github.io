-- Week 2 Day 3 Lab
--1.
--Write a script that adds an index to the MyGuitarShop database for the zip code field in the Addresses table.

USE MyGuitarShop;

DROP INDEX IF EXISTS Addresses.IX_Addresses_ZipCode;

CREATE NONCLUSTERED INDEX IX_Addresses_ZipCode ON Addresses(ZipCode);
go

--2.
--Write a script that implements the following design in a database named MyWebDB:

--In the Downloads table, the UserID and ProductID columns are the foreign keys.
--Include a statement to drop the database if it already exists.
--Include statements to create and select the database.
--Include necessary primary keys / indexes.
USE master;

go

DROP DATABASE IF EXISTS MyWebDB;
go

CREATE DATABASE MyWebDB;
go

USE MyWebDB;

CREATE TABLE Users(
	UserID			INT NOT NULL IDENTITY PRIMARY KEY,
	EmailAddress	VARCHAR(60) NOT NULL UNIQUE,
	FirstName		VARCHAR(60) NOT NULL,
	LastName		VARCHAR(60) NOT NULL
	);

CREATE TABLE Products(
	ProductID		INT NOT NULL IDENTITY PRIMARY KEY,
	ProductName		VARCHAR(60) NOT NULL UNIQUE
	);

CREATE TABLE Downloads(
	DownloadID		INT NOT NULL IDENTITY PRIMARY KEY,
	UserID			INT NOT NULL FOREIGN KEY REFERENCES Users(UserID),
	DownloadDate	DATETIME NOT NULL,
	FileName		VARCHAR(200) NOT NULL,
	ProductID		INT NOT NULL FOREIGN KEY REFERENCES Products(ProductID)
	);

--3.
--Write an ALTER TABLE statement that adds two new columns to the Products table created in exercise 2.
--Add one column for product price that provides for three digits to the left of the decimal point and two to the right. This column should have a default value of 9.99.
--Add one column for the date and time that the product was added to the database.

ALTER TABLE Products
ADD Price			DECIMAL(5, 2) NOT NULL DEFAULT 9.99,
	DateAdded		DATETIME NOT NULL DEFAULT GETDATE();


--4.
--Write an ALTER TABLE statement that modifies the Users table created in exercise 2 so the FirstName column cannot store null values and can store a maximum of 20 characters.

ALTER TABLE Users
ALTER COLUMN FirstName VARCHAR(20) NOT NULL;


--5.
--See the script in notes area. There are at least 4 integrity problems with this code even though it runs without error. Identify the problems & correct the code.

use master;
go

drop database if exists employee;
go

create database employee;
go

use employee;
go

create table emp (
employeeID int not null identity primary key,		--added PK added identity
fname varchar(45) not null,							--Moved var				
lname varchar(45) not null,							--Moved var
mname varchar(45) null,								--Moved var
--birthyy char(2) not null,
--birthmm char(2) not null,
--birthdd char(2) not null,
dob date not null,									--combined to dob
phone varchar(15) null								--Moved var
);

create table dependent (
dependentID int not null identity primary key,		--added PK added identity
fname varchar(45) not null,
lname varchar(45) not null,
mname varchar(45) null,
dob date not null,
employeeID int not null references emp(employeeID)		--added FK added identity
);
go

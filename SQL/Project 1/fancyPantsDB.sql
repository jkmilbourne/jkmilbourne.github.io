# -------------------------------------------------------
#	Script to create fancyPantsMembers database
#	NAME		DATE		DESCRIPTION
#	Josh		1/22/2021	Initial development
# --------------------------------------------------------
# -------------------------------------------------------Create Database
DROP DATABASE IF EXISTS fancyPantsMembers;
CREATE DATABASE IF NOT EXISTS fancypantsMembers;
USE fancyPantsMembers;

# --------------------------------------------------------Create facyPantsEmp table in database
CREATE TABLE IF NOT EXISTS fancyPantsEmp (
	empID				INT				NOT NULL		PRIMARY KEY AUTO_INCREMENT,
    empName				VARCHAR(45)		NOT NULL
);

# ------------------------------------------------------Create members table in database
CREATE TABLE IF NOT EXISTS members (
	memberID			INT				NOT NULL		PRIMARY KEY AUTO_INCREMENT,
    firstName			VARCHAR(45)		NOT NULL,
    lastName			VARCHAR(45)		NOT NULL,
    email				VARCHAR(45)		NOT NULL		UNIQUE,
    password			VARCHAR(45)		NOT NULL,
    zipCode				VARCHAR(20)		NOT NULL,
    phoneNumber			VARCHAR(20)		NOT NULL,
	visitDate			DATETIME		NOT NULL,
    created				DATETIME		NOT NULL,
    expires				DATETIME		NOT NULL,
    followUpDate		DATETIME						DEFAULT NULL,
    followUpEmpID		INT								DEFAULT NULL REFERENCES fancyPantsEmp(empID)
);

# --------------------------------------------------------Create ccInfo table in database
CREATE TABLE IF NOT EXISTS ccInfo (
	refID				INT				NOT NULL		PRIMARY KEY AUTO_INCREMENT,
    memberID			INT				NOT NULL,
    ccType				VARCHAR(20)		NOT NULL,
    ccNum				VARCHAR(20)		NOT NULL		UNIQUE,
    ccExp				DATE			NOT NULL,
    invoiceDate			DATETIME		NOT NULL,
    invoiceTotal		DECIMAL(9,2)	NOT NULL,
    paymentDate			DATETIME						DEFAULT NULL,
    paymentTotal		DECIMAL(9,2)					DEFAULT NULL,
	balance				DECIMAL(9,2)					DEFAULT NULL,
	FOREIGN KEY (memberID) REFERENCES members (memberID)
);

# --------------------------------------------------------Insert data into members table
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate, created, expires, followUpDate, followUpEmpID)
			VALUES ('Daenerys', 'Targaryen', 'dtargaryen@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-01', '2022-01-01', '2021-09-01', 1);
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Jon', 'Snow', 'jsnow@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-15', '2022-01-15', '2021-09-15', 2);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Arya', 'Stark', 'astrak@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-01', '2022-02-01', '2021-10-01', 3);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Kahl', 'Drogo', 'ddrogo@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-15', '2022-02-15', '2021-10-15', 4);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Jojen', 'Reed', 'jreed@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-01', '2022-03-01', '2021-11-01', 5);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Ramsay', 'Bolton', 'rbolton@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-15', '2022-03-15', '2021-11-01', 6);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Oberyn', 'Martell', 'omartell@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-02', '2022-02-01', '2021-09-02', 7);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Gregor', 'Clegane', 'gclegane@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-16', '2022-01-16', '2021-09-16', 8);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Petyr', 'Baelish', 'pbaelish@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-02', '2022-02-02', '2021-09-01', 9);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Tyrion', 'Lanister', 'tlanister@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-16', '2022-02-16', '2021-10-16', 10);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Brienne', 'of Tarth', 'botarth@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-02', '2022-03-02', '2021-11-02', 11);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Jorah', 'Mormont', 'jmormont@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-16', '2022-03-16', '2021-11-16', 12);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Margaery', 'Tyrell', 'mtyrell@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-03', '2022-01-03', '2021-09-03', 13);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Jaqen', "H'ghar", 'jhghar@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-17', '2022-01-17', '2021-09-17', 1);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Tormund', 'Giantsbane', 'tgiantsbane@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-03', '2022-02-03', '2021-10-03', 1);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Tyene', 'Sand', 'tsand@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-02-18', '2022-02-18', '2021-10-18', 2);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Robert', 'Baratheon', 'rbaratheon@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-03', '2022-03-03', '2021-11-03', 3);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Walder', 'Frey', 'wfrey@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-03-18', '2022-03-18', '2021-11-18', 4);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Grey', 'Worm', 'gworm@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-04', '2022-01-04', '2021-09-04', 5);
			
INSERT INTO members (firstName, lastName, email, password, zipCode, phoneNumber, visitDate,created, expires, followUpDate, followUpEmpID)
			VALUES ('Samwell', 'Tarly', 'starly@me.com', 'monkey1234', '12345', '123-456-7590', NOW(), '2021-01-19', '2022-01-19', '2021-09-19', 6);


# -------------------------------------------------------Insert data into ccInfo table
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (1, 'VISA', '1234-1234-1234-1201', '2024-07-01', '2021-01-01', '100', '2021-01-01', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (2, 'MC', '1234-1234-1234-1202', '2024-07-01', '2021-01-02', '100', '2021-01-02', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (3, 'DISC', '1234-1234-1234-1203', '2024-07-01', '2021-01-03', '100', '2021-01-03', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (4, 'AE', '1234-1234-1234-1204', '2024-07-01', '2021-01-04', '100', '2021-01-04', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (5, 'DC', '1234-1234-1234-1205', '2024-07-01', '2021-01-05', '100', '2021-01-10', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (20, 'DC', '1234-1234-1234-1206', '2024-07-01', '2021-01-06', '100', '2021-01-11', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (19, 'AE', '1234-1234-1234-1207', '2024-07-01', '2021-01-07', '100', '2021-01-12', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (18, 'DISC', '1234-1234-1234-1208', '2024-07-01', '2021-01-8', '100', '2021-01-13', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (17, 'MC', '1234-1234-1234-1209', '2024-07-01', '2021-01-09', '100', '2021-01-14', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, paymentDate, paymentTotal, balance)
			VALUES (16, 'VISA', '1234-1234-1234-1210', '2024-07-01', '2021-01-10', '100', '2021-01-15', '100', 0);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (6, 'VISA', '1234-1234-1234-1211', '2024-07-01', '2021-01-11', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (7, 'MC', '1234-1234-1234-1212', '2024-07-01', '2021-01-12', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (8, 'DISC', '1234-1234-1234-1213', '2024-07-01', '2021-01-13', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (9, 'AE', '1234-1234-1234-1214', '2024-07-01', '2021-01-14', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (10, 'DC', '1234-1234-1234-1215', '2024-07-01', '2021-01-15', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (15, 'DC', '1234-1234-1234-1216', '2024-07-01', '2021-01-16', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (14, 'AE', '1234-1234-1234-1217', '2024-07-01', '2021-01-17', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (13, 'DISC', '1234-1234-1234-1218', '2024-07-01', '2021-01-18', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (12, 'MC', '1234-1234-1234-1219', '2024-07-01', '2021-01-19', '100', 100);
			
INSERT INTO ccInfo (memberID, ccType, ccNum, ccExp, invoiceDate, invoiceTotal, balance)
			VALUES (11, 'VISA', '1234-1234-1234-1220', '2024-07-01', '2021-01-20', '100', 100);
			

-- -------------------------------------------------------Insert data into fancyPantsEmp table
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Jason Voorhees');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Micheal Meyers');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Jigsaw');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Chucky');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Pinhead');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Freddy Krueger');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Leatherface');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Hanibal Lecter');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Norman Bates');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Patrick Bateman');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Dexter Morgan');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Buffalo Bill');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Sylar');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Red John');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Arthur Mitchel');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Francis Dolarhyde');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Billy Loomis');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Daniel Robitaille');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Annie Wilkes');
			
INSERT INTO fancyPantsEmp (empName)
			VALUES ('Mark Hoffman');
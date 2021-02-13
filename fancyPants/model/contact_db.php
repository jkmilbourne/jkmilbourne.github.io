<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/12/21
#Version:                                           #1.0
#Date Last Modified:                                #02/12/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

    02/12/21        v1.0       Joshua Milbourne     Created contact_db.php

--
------------------------------------------------------------------------------------------------------------------>

<?php
function addMember ($first_name, $last_name, $email, $password_form, $zip, $phone, $card_type, $card_number, $exp_date) {
    $db = Database::getDB();

    $query1 = "INSERT INTO members 
                (firstName, lastName, email, password, zipCode, phoneNumber, visitDate, created, expires, followUpDate, followUpEmpID) 
            VALUES 
                (:first_name, :last_name, :email, :password, :zip, :phone, NOW(), NOW(), NOW(), NOW(), 1)";
    $statement1 = $db->prepare($query1);
    $statement1->bindValue(':first_name', $first_name);
    $statement1->bindValue(':last_name', $last_name);
    $statement1->bindValue(':email', $email);
    $statement1->bindValue(':password', $password_form);
    $statement1->bindValue(':zip', $zip);
    $statement1->bindValue(':phone', $phone);
    $statement1->execute();
    $statement1->closeCursor();

    $query2 = "INSERT INTO ccinfo
                    (memberID, ccType, ccNum, ccExp, invoiceDate, InvoiceTotal)
                VALUES
                    (1, :card_type, :card_number, :exp_date, NOW(), 100.00)";
    $statement2 = $db->prepare($query2);
    $statement2->bindValue(':card_type', $card_type);
    $statement2->bindValue(':card_number', $card_number);
    $statement2->bindValue(':exp_date', $exp_date);
    $statement2->execute();
    $statement2->closeCursor();
}
?>
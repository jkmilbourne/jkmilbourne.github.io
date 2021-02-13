<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/12/21
#Version:                                           #1.0
#Date Last Modified:                                #02/12/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

    02/12/21    v1.0    Joshua Milbourne        created admin_db.php
--
------------------------------------------------------------------------------------------------------------------>

<?php 
function listEmp () {

    $db = Database::getDB();

    $query = 'SELECT * FROM fancypantsemp ORDER BY empID;';
    $statement = $db->prepare($query);
    $statement->execute();
    $employees = $statement;
    // $statement->closeCursor();
    return $employees;
}

function listComments ($emp_id) {

    $db = Database::getDB();

    $query2 = 'SELECT * FROM bookus WHERE bookus.empID = :empID ORDER BY visitDate;';
    $statement2 = $db->prepare($query2);
    $statement2->bindValue(':empID', $emp_id);
    $statement2->execute();
    $visitors = $statement2;
    // $statement2->closeCursor();
    return $visitors;
}

function deleteComment ($visitor_id) {

    $db = Database::getDB();

    $query = 'DELETE FROM bookus WHERE refID = :visitor_id;';
        $statement = $db->prepare($query);
        $statement->bindValue(':visitor_id', $visitor_id);
        $statement->execute();
        $statement->closeCursor();
}
?>
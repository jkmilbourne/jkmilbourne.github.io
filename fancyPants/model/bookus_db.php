<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/12/21
#Version:                                           #1.0
#Date Last Modified:                                #02/12/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

    02/12/21    v1.0    Joshua Milbourne        Created bookus_db.php
--
------------------------------------------------------------------------------------------------------------------>
<?php
function bookUs ($bookUsName, $bookUsEmail, $bookUsPhone, $bookUsComments) {
    $db = Database::getDB();

    $query = "INSERT INTO bookus 
                        (name, email, phone, comments, visitDate, empID)
                    VALUES
                        (:bookUsName, :bookUsEmail, :bookUsPhone, :bookUsComments, NOW(), 1)";
        
        $statement = $db->prepare($query);
        $statement->bindValue(':bookUsName', $bookUsName);
        $statement->bindValue(':bookUsEmail', $bookUsEmail);
        $statement->bindValue(':bookUsPhone', $bookUsPhone);
        $statement->bindValue(':bookUsComments', $bookUsComments);
        $statement->execute();
        $statement->closeCursor();
}

?>
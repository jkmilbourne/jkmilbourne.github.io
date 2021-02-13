<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #
#Version:                                           #
#Date Last Modified:                                #
#Modified by:                                       #
#Modification log:                                  #
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
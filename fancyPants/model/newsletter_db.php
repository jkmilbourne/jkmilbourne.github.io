<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #2/12/21
#Version:                                           #1.0
#Date Last Modified:                                #2/12/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        2/12/21    v1.0    Joshua Milbourne    Created home page and connected to home.html form
--
------------------------------------------------------------------------------------------------------------------>

<?php
function joinNewsletter($email_address_news, $first_name_news, $last_name_news) {

    $db = Database::getDB();

    $query = "INSERT INTO newsletter 
                    (email, firstName, lastName)
                VALUES
                    (:email, :first_name, :last_name)";
        $statement = $db->prepare($query);
        $statement->bindValue(':email', $email_address_news);
        $statement->bindValue(':first_name', $first_name_news);
        $statement->bindValue(':last_name', $last_name_news);
        $statement->execute();
        $statement->closeCursor();
}
?>
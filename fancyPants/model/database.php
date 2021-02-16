<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/12/21
#Version:                                           #1.0
#Date Last Modified:                                #02/05/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        02/12/21    v1.0    Joshua Milbourne    Created database.php page
--
------------------------------------------------------------------------------------------------------------------>

<?php
class Database {
    private static $dsn = 'mysql:host=localhost;dbname=fancypantsmembers';
    private static $username = 'fp_emp';
    private static $password = 'pa55word';
    private static $db;

    private function __construct() {}

    public static function getDB () {
        if (!isset(self::$db)) {
            try {
                self::$db = new PDO(self::$dsn,
                                    self::$username,
                                    self::$password);
            } catch (PDOException $e) {
                // $error_message = $e->getMessage();
                // include('../errors/database_error.php');
                exit();
            }
        }
        return self::$db;
    }
}
?>
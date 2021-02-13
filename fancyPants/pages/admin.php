<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/05/21
#Version:                                           #1.0
#Date Last Modified:                                #02/05/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        02/05/21    v1.0    Joshua Milbourne    Created admin.php page
--
------------------------------------------------------------------------------------------------------------------>

<?php 
// $dsn = 'mysql:host=localhost;dbname=fancypantsmembers';
// $username = 'fp_emp';
// $password_db = 'pa55word';



// try {
// $db = new PDO($dsn, $username, $password_db);
// } catch (PDOException $e) {
//     $error_message = $e->getMessage();
//     echo "Database error: $error_message";
// }

$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = 'list-comments';
}
// echo $action;
if ($action == 'list-comments') {
    $emp_id = filter_input(INPUT_GET, 'employee_id', FILTER_VALIDATE_INT);
    if ($emp_id == NULL || $emp_id == FALSE) {
        $emp_id = 1;
    }

    require_once('../model/database.php');
    require_once('../model/admin_db.php');

    $employees = listEmp();
    $visitors = listComments($emp_id);
    // foreach($employees as $employee) {
    //     echo "Name: $employee[empName]";
    // }


    // try {
    //     $query = 'SELECT * FROM fancypantsemp ORDER BY empID;';
    //     $statement = $db->prepare($query);
    //     $statement->execute();
    //     $employees = $statement;
    //     // $statement->closeCursor();

    //     $query2 = 'SELECT * FROM bookus WHERE bookus.empID = :empID ORDER BY visitDate;';
    //     $statement2 = $db->prepare($query2);
    //     $statement2->bindValue(':empID', $emp_id);
    //     $statement2->execute();
    //     $visitors = $statement2;
    //     $statement2->closeCursor();
    // } catch (PDOException $e) {
    //     echo 'Error on read: ' . $e->getMessage();
    // }

} else if ($action == 'delete-comments') {
    $visitor_id = filter_input(INPUT_POST, 'visitor_id', FILTER_VALIDATE_INT);

    require_once('../model/database.php');
    require_once('../model/admin_db.php');

    deleteComment($visitor_id);
    header("location: admin.php");
    
    // try {
    //     $query = 'DELETE FROM bookus WHERE refID = :visitor_id;';
    //     $statement = $db->prepare($query);
    //     $statement->bindValue(':visitor_id', $visitor_id);
    //     $statement->execute();
    //     $statement->closeCursor();
    //     header("Location: admin.php");

    // } catch (PDOException $e) {
    //     echo 'Error on delete: ' . $e->getMessage();
    // }
}


?>

<!DOCTYPE html>
<html lang="en" id="bookUs_page" class="html_back_img">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Joshua Milbourne">
        <meta name="description" content="FancyPants Event Designs, designing your perfect event no matter how fancy your pants are">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-------------------------------------------------------------------------------- CSS links -->
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/style.css">
        <link rel="stylesheet" href="../styles/admin.css">
        <!-------------------------------------------------------------------------------- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="../images/favicon_io/site.webmanifest">
        
        <title>FancyPants Event Designs Book Us</title>
    </head>
    <body>
        <div class="content">
            <header>
                <div><a href="home.html"><img src="../images/fancyPants.png" alt="FancyPants logo" height="64px" id="header_logo"><h1 id="headerH1">FancyPants Event Designs</h1></a></div>
                <div id="nav_items"><a href="home.html"> Home </a>&#x2758;<a href="faq.html"> FAQs </a>&#x2758;<a href="contact.html"> Membership </a>&#x2758;<a href="wishList.html"> Wish List </a>&#x2758;<a href="photos.html"> Photos </a>&#x2758;<a href="reviews.html"> Customer Reviews </a></a>&#x2758;<a href="bookUs.html"> Book Us</a>
                </div>
            </header>
            <main>
                <section id="admin" class="main">
                    <h1>FancyPants Admin Page</h1>
                    <div class="admin-content">
                        <aside class="admin-aside">
                            <h4>Select an employee to view messages:</h4>
                            <ul class="emp-list">
                                <?php foreach ($employees as $employee) : ?>
                                <li>
                                    <a href="?employee_id=<?php echo $employee['empID'] ?>"><?php echo $employee['empName'] ?></a>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </aside>
    
                        <table class="admin-messages">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Comments</th>
                                <th>Visit Date</th>
                                <th>&nbsp;</th>
                            </tr>
                            <?php foreach ($visitors as $visitor) : ?>
                                <tr>
                                    <td><?php echo $visitor['name']; ?></td>
                                    <td><?php echo $visitor['email']; ?></td>
                                    <td><?php echo $visitor['phone']; ?></td>
                                    <td><?php echo $visitor['comments']; ?></td>
                                    <td><?php echo $visitor['visitDate']; ?></td>
                                    <td>
                                        <form action="admin.php" method="POST">
                                            <input type="hidden" name="action" value="delete-comments">
                                            <input type="hidden" name="visitor_id" value="<?php echo $visitor['refID']; ?>">
                                            <input type="submit" value="DELETE" class="admin-message-delete-btn">
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </table>
                    </div>
                </section>
            </main>
        </div>
        <footer>
            <p>&#169;2020 FancyPants Event Designs&#8482;</p>
            <p>Phone: <a href="tel:123-456-7890">123-456-7890</a> Email: <a href="mailto:fancy@FancyPants.com">fancy@FancyPants.com</a></p>
            <p><address>P.O. Box #1324<br>123 FancyPants Ln<br>Springfield, MO 65814<br>USA</address></p>
            <p><a href="https://www.facebook.com/" target="blank"><img src="../images/fb.png" alt="facebook"></a>
                <a href="https://twitter.com/" target="blank"><img src="../images/tw.png" alt="twitter"></a>
                <a href="https://www.youtube.com/" target="blank"><img src="../images/yt.png" alt="youtube"></a>
                <a href="https://www.instagram.com/" target="blank"><img src="../images/ig.png" alt="instagram"></a></p>
                <p><a href="login.html">Employee Login</a></p>
        </footer>
        <!--------------------------------------------------------------------- JavaScript  -->
        <script src="../js/calendar.js"></script>
        <script src="../js/library_data_RegEx.js"></script>
        <script src="../js/contact.js"></script>
    </body>
</html>
<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #09/11/20
#Version:                                           #1.2
#Date Last Modified:                                #1/31/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        09/11/20    v1.0    Joshua Milbourne    Created bookUs page
        01/31/21    v1.1    Joshua Milbourne    Cleaned up cade and added comments
        02/12/21    v1.2    Joshua Milbourne    added db definition and added call to bookUs method
--
------------------------------------------------------------------------------------------------------------------>

<?php

$bookUsName = filter_input(INPUT_POST, 'bookUsName');
$bookUsEmail = filter_input(INPUT_POST, 'bookUsEmail');
$bookUsPhone = filter_input(INPUT_POST, 'bookUsPhone');
$bookUsComments = filter_input(INPUT_POST, 'bookUsComments');

if ($bookUsName == NULL || $bookUsEmail == NULL ||$bookUsPhone == NULL) {
    $error = 'Please check all your entries and try again';
    echo "Form Data Error: $error";
    exit();
} else {
    require_once('../model/database.php');
    require_once('../model/bookus_db.php');

    bookUs($bookUsName, $bookUsEmail, $bookUsPhone, $bookUsComments);

    // $dsn = 'mysql:host=localhost;dbname=fancypantsmembers';
    // $username = 'fp_emp';
    // $password_db = 'pa55word';

    // try {
    // $db = new PDO($dsn, $username, $password_db);
    // } catch (PDOException $e) {
    //     $error_message = $e->getMessage();
    //     echo "Database error: $error_message";
    // }
    
    // $query = "INSERT INTO bookus 
    //                 (name, email, phone, comments, visitDate, empID)
    //             VALUES
    //                 (:bookUsName, :bookUsEmail, :bookUsPhone, :bookUsComments, NOW(), 1)";
    
    // $statement = $db->prepare($query);
    // $statement->bindValue(':bookUsName', $bookUsName);
    // $statement->bindValue(':bookUsEmail', $bookUsEmail);
    // $statement->bindValue(':bookUsPhone', $bookUsPhone);
    // $statement->bindValue(':bookUsComments', $bookUsComments);
    // $statement->execute();
    // $statement->closeCursor();

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
                <section id="bookUs" class="main">
                    <h1>Book Us</h1>
                    <h2>Take a look at our calendar and and pick a free date that works best with your schedule.  Then enter your name, email and phone number and we will do the rest.</h2>
                    <h1><span id="month_year">&nbsp;</span></h1>
                    <!-- Calendar js app -->
                    <table id="calendar">
                        <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
                    </table>
                    <!-- <label for="time_stamp">Time Stamp</label>
                    <input type="text" name="time_stamp" id="time_stamp" disabled><br><br> -->
                    <br>
                    <p class="center-text">You will shortly be recieving an email.  We will take it from here!</p>
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
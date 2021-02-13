<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #01/30/21
#Version:                                           #1.2
#Date Last Modified:                                #02/12/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        01/30/21    v1.0    Joshua Milbourne    Created contact.php page and connected to contact.php form
        01/31/21    v1.1    Joshua Milbourne    Cleaned up code and added comments
        02/12/21    v1.2    Joshua Milbourne    Added database definition and called addMember function
--
------------------------------------------------------------------------------------------------------------------>

<?php

$first_name = filter_input(INPUT_POST, 'first_name');
$last_name = filter_input(INPUT_POST, 'last_name');
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$password_form = filter_input(INPUT_POST, 'password');
$zip = filter_input(INPUT_POST, 'zip');
$phone = filter_input(INPUT_POST, 'phone');
$card_type = filter_input(INPUT_POST, 'card_type');
$card_number = filter_input(INPUT_POST, 'card_number');
$exp_date = filter_input(INPUT_POST, 'exp_date');


if ($first_name == NULL || $last_name == NULL || $email == NULL || $password_form == NULL || 
        $phone == NULL || $zip == NULL) {    
    $error = 'Please check all your entries and try again';
    echo "Form Data Error: $error";
    exit();
} else {
    require_once('../model/database.php');
    require_once('../model/contact_db.php');

    addMember($first_name, $last_name, $email, $password_form, $zip, $phone, $card_type, $card_number, $exp_date);

    // $dsn = 'mysql:host=localhost;dbname=fancypantsmembers';
    // $username = 'fp_emp';
    // $password_db = 'pa55word';
    
    // try {
    // $db = new PDO($dsn, $username, $password_db);
    // } catch (PDOException $e) {
    //     $error_message = $e->getMessage();
    //     echo "Database error: $error_message";
    // }
    
    //////////////////////////////////////// statement 1 
    // $query1 = "INSERT INTO members 
    //             (firstName, lastName, email, password, zipCode, phoneNumber, visitDate, created, expires, followUpDate, followUpEmpID) 
    //         VALUES 
    //             (:first_name, :last_name, :email, :password, :zip, :phone, NOW(), NOW(), NOW(), NOW(), 1)";
    // $statement1 = $db->prepare($query1);
    // $statement1->bindValue(':first_name', $first_name);
    // $statement1->bindValue(':last_name', $last_name);
    // $statement1->bindValue(':email', $email);
    // $statement1->bindValue(':password', $password_form);
    // $statement1->bindValue(':zip', $zip);
    // $statement1->bindValue(':phone', $phone);
    // $statement1->execute();
    // $statement1->closeCursor();

    //////////////////////////////////////// statement 2 ccinfo
    // $query2 = "INSERT INTO ccinfo
    //                 (memberID, ccType, ccNum, ccExp, invoiceDate, InvoiceTotal)
    //             VALUES
    //                 (1, :card_type, :card_number, :exp_date, NOW(), 100.00)";
    // $statement2 = $db->prepare($query2);
    // $statement2->bindValue(':card_type', $card_type);
    // $statement2->bindValue(':card_number', $card_number);
    // $statement2->bindValue(':exp_date', $exp_date);
    // $statement2->execute();
    // $statement2->closeCursor();
}

?>

<!DOCTYPE html>
<html lang="en" id="contact_page" class="html_back_img">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Joshua Milbourne">
        <meta name="description" content="FancyPants Event Designs, designing your perfect event no matter how fancy your pants are">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-------------------------------------------------------------------- CSS links -->
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/style.css">
        <link rel="stylesheet" href="../styles/contact.css">

        <!-------------------------------------------------------------------- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="../images/favicon_io/site.webmanifest">
        <title>FancyPants Event Designs Become a Member</title>
    </head>
    <body>
        <div class="content">
            <header>
                <div><a href="home.html"><img src="../images/fancyPants.png" alt="FancyPants logo" height="64px" id="header_logo"><h1 id="headerH1">FancyPants Event Designs</h1></a></div>
                <div id="nav_items"><a href="home.html"> Home </a>&#x2758;<a href="faq.html"> FAQs </a>&#x2758;<a href="contact.html"> Membership </a>&#x2758;<a href="wishList.html"> Wish List </a>&#x2758;<a href="photos.html"> Photos </a>&#x2758;<a href="reviews.html"> Customer Reviews </a></a>&#x2758;<a href="bookUs.html"> Book Us</a>
                </div>
            </header>
            <main>
                <section id="contact_form" class="main">
                    <h1>Become a Member</h1>
                    <p>For a small membership fee, you can enjoy all the perks that com with being a member of the fastest growing event planning buisness. A <span class="brand_name">FancyPants Event Designs</span> membership entitles you to the best venues and no restrictions on blackout dates.</p><p>Plus, you will get access to a personal designer who will work with you on all your events to make sure that there is consistency it themes and standards and make sure you have all the attention you deserve for all your event planning needs. Enroll today!</p><br><br>
                    <section id="registration_result">
                        <p>Congratulations! Your account registration has been submitted.</p>
                        <p>You'll receive an email shortly with more information. Welcome!</p>
                        <a href="contact.html"><input type="button" id="back" value="Back"></a>
                        
                    </section>
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
    </body>
</html>


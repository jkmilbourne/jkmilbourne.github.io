<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #01/30/21
#Version:                                           #2.0
#Date Last Modified:                                #02/14/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        01/30/21    v1.0    Joshua Milbourne    Created contact.php page and connected to contact.php form
        01/31/21    v1.1    Joshua Milbourne    Cleaned up code and added comments
        02/12/21    v1.2    Joshua Milbourne    Added database definition and called addMember function
        02/14/21    v2.0    Joshua Milbourne    Recoded all css with new design
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
}
?>

<!DOCTYPE html>
<html lang="en" id="contact_page" class="html_back_img">
    <head>
        <meta charset="UTF-8" />
        <meta name="author" content="Joshua Milbourne" />
        <meta
            name="description"
            content="FancyPants Event Designs, designing your perfect event no matter how fancy your pants are"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-------------------------------------------------------------------------- CSS Links -->
        <link rel="stylesheet" href="../css/main.css" />
        <!-------------------------------------------------------------------------- favicon -->
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../images/favicon_io/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../images/favicon_io/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../images/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="../images/favicon_io/site.webmanifest" />

        <title>FancyPants Event Designs</title>
    </head>
    <body>
        <nav class="nav-mobile" id="nav-mobile">
            <img
                src="../images/exit.svg"
                alt="exit navigation"
                id="mobile-exit-btn"
            />
            <ul class="nav-links-mobile">
                <li><a href="home.html">Home</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="#" class="current">Membership</a></li>
                <li><a href="wishList.html">Wish List</a></li>
                <li><a href="photos.html">Gallery</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="bookUs.html">Book Us</a></li>
            </ul>
        </nav>
        <div class="wrapper">
            <header class="header">
                <div class="content header-content">
                    <div class="logo">
                        <a href="home.html">
                            <h4 class="logo-text">
                                Fancy<span class="logo-span">Pants</span>
                            </h4>
                        </a>
                    </div>

                    <nav class="nav-desktop">
                        <div class="nav-desktop-div">
                            <ul class="nav-links-desktop">
                                <li><a href="home.html">Home</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li>
                                    <a href="#" class="current">Membership</a>
                                </li>
                                <li>
                                    <a href="wishList.html">Wish List</a>
                                </li>
                                <li><a href="photos.html">Gallery</a></li>
                                <li>
                                    <a href="reviews.html">Reviews</a>
                                </li>
                                <li><a href="bookUs.html">Book Us</a></li>
                            </ul>
                        </div>
                    </nav>
                    <img
                        src="../images/menu.svg"
                        alt="menu button"
                        id="mobile-menu-btn"
                    />
                </div>
            </header>
            <main>
                <div class="img-container image4"></div>
                
                <section class="contact-welcome">
                    <p>Congratulations! Your account registration has been submitted.</p>
                    <p>You'll receive an email shortly with more information. Welcome!</p>
                </section>
                
            </main>
        </div>
        <footer class="footer">
            <div class="content">
                <p>&copy; 2020 FancyPants Event Designs&#8482;</p>
                <p>
                    Phone: <a href="tel:123-456-7890">123-456-7890</a> Email:
                    <a href="mailto:fancy@FancyPants.com"
                        >fancy@FancyPants.com</a
                    >
                </p>
                <p>
                    <a href="https://www.facebook.com/" target="blank"
                        ><img src="../images/fb.png" alt="facebook"
                    /></a>
                    <a href="https://twitter.com/" target="blank"
                        ><img src="../images/tw.png" alt="twitter"
                    /></a>
                    <a href="https://www.youtube.com/" target="blank"
                        ><img src="../images/yt.png" alt="youtube"
                    /></a>
                    <a href="https://www.instagram.com/" target="blank"
                        ><img src="../images/ig.png" alt="instagram"
                    /></a>
                </p>
                <p><a href="login.html">Admin Login</a></p>
            </div>
        </footer>

        <!---------------------------------------------------------------- JavaScript -->
        <script src="../js/navbar.js"></script>
        <script src="../js/library_navigate.js"></script>
        <script src="../js/library_fields.js"></script>
        <script src="../js/library_validate.js"></script>
        <script src="../js/library_validate_forms.js"></script>
        <script src="../js/register.js"></script>
    </body>
</html>

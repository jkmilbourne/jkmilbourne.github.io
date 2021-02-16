<!----------------------------------------------------------------------------------------------------------------
--
#Original Author:                                   #Joshua Milbourne
#Date Created:                                      #02/05/21
#Version:                                           #2.0
#Date Last Modified:                                #02/14/21
#Modified by:                                       #Joshua Milbourne
#Modification log:                                  #

        02/05/21    v1.0    Joshua Milbourne    Created admin.php page
        02/14/21    v2.0    Joshua Milbourne    Recoded all css with new design
--
------------------------------------------------------------------------------------------------------------------>

<?php 

$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = 'list-comments';
}

if ($action == 'list-comments') {
    $emp_id = filter_input(INPUT_GET, 'employee_id', FILTER_VALIDATE_INT);
    if ($emp_id == NULL || $emp_id == FALSE) {
        $emp_id = 1;
    }

    require_once('../model/database.php');
    require_once('../model/admin_db.php');

    $employees = listEmp();
    $visitors = listComments($emp_id);

} else if ($action == 'delete-comments') {
    $visitor_id = filter_input(INPUT_POST, 'visitor_id', FILTER_VALIDATE_INT);

    require_once('../model/database.php');
    require_once('../model/admin_db.php');

    deleteComment($visitor_id);
    header("location: admin.php");
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
        <link rel="stylesheet" href="../css/main.css">
        <!-------------------------------------------------------------------------------- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="../images/favicon_io/site.webmanifest">
        
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
                <li><a href="contact.html">Membership</a></li>
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
                        <a href="#">
                            <h4 class="logo-text">
                                Fancy<span class="logo-span">Pants</span>
                            </h4>
                        </a>
                    </div>

                    <nav class="nav-desktop">
                        <div class="nav-desktop-div">
                            <ul class="nav-links-desktop">
                                <li>
                                    <a href="home.html">Home</a>
                                </li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li>
                                    <a href="contact.html">Membership</a>
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
                <div class="img-container image11"></div>
                <section id="admin" class="section-admin">
                    <h2>FancyPants Admin Page</h2>
                    <div class="admin-content">
                        <div class="admin-table-div">
                            <h3 class="admin-messages-h3">Employee Messages</h3>
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
                        <aside class="admin-aside">
                            <h3>Select an employee to view messages:</h3>
                            <ul class="emp-list">
                                <?php foreach ($employees as $employee) : ?>
                                <li>
                                    <a href="?employee_id=<?php echo $employee['empID'] ?>"><?php echo $employee['empName'] ?></a>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </aside>
                    </div>
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
        <script src="../js/navbar.js"></script>
    </body>
</html>
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Set a default port if not specified
const cssSrc = process.env.CSS_SOURCE || '/style.css';

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${cssSrc}">
    <script src="https://kit.fontawesome.com/0321996a56.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/0321996a56.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Home</title>
  </head>
  <body>
      <header>
          <div class="container">
              <div class="row">
                  <img src="https://www.dhs.gov.za/sites/all/themes/professional_theme/logo.png" alt="DHS Logo" width="300px" height="100px" />
              </div>
              <div class="row-right">
                  <img src="https://www.gov.za/sites/all/themes/custom/eco_omega/images/flag-south-africa.svg" alt="SA Flag" width="200px" height="100px" />
              </div>
          </div>
          <div class="links">
              <nav>
                  <div class="navbar-toggle" id="navbar-toggle">
                      <i class="fas fa-bars fa-lg"></i>
                  </div>
                  <li class="navbar-menu" id="navbar-menu">
                      <ul><a href="index.php">&nbsp;Home</a></ul>
                      <ul><a href="About_us.php">&nbsp;About US</a></ul>
                      <ul><a href="https://www.thornhillshoppingcentre.co.za/Website%20User%20agreement.pdf" target="_blank">&nbsp;Policy Blog</a></ul>
                      <ul><a href="Building_solution.php">Alternative Building Solutions</span></a></ul>
                      <ul><a href="Contact_us.php">Contact Us</span></a></ul>
                  </li>
              </nav>
          </div>
      </header>
      <br /><br />
    <div class="content">
      <div class="border-content">
        <h2 class="topic">Department of Human Settlements</h2><br />
        <p id="info">The formulation of South Africa's Housing Policy commenced prior to the democratic elections, with the formation of the National Housing Forum. This forum was a multi-party non-governmental negotiating body comprising 19 members from business, the community, government, development organisations and political parties outside the government at this time.</p>
      </div>
  
      <div class="daily-reports-grid">
        <a href="#" target="_blank"><img src="https://www.dhs.gov.za/sites/default/files/u16/bills1.jpg" alt="Daily Report 1"></a>
        <a href="#" target="_blank"><img src="https://www.dhs.gov.za/sites/default/files/u16/md2.png" alt="Daily Report 2"></a>
        <a href="#" target="_blank"><img src="https://www.dhs.gov.za/sites/default/files/u16/sdocuments.jpg" alt="Daily Report 3"></a>
      </div>
    </div>
  
    <footer>
      <a href="">Terms and Conditions</a> | <a href="">Copyright &copy; 2020. Department of Human
          Settlements, All rights reserved.</a>
      </a>
    </footer>
    
    <script>
        const navbarToggle = document.getElementById('navbar-toggle');
        const navbarMenu = document.getElementById('navbar-menu');
        navbarToggle.addEventListener('click', () => {
          navbarMenu.classList.toggle('show');
        });
    </script>
  </body>
  </html>
  
  `);
});
app.use(express.static(path.resolve('./public')));
app.use('/public', express.static(path.resolve('./public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

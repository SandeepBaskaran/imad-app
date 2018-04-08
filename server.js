var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var profile = {
    title : 'Profile | Sandeep',
    location : 'TN, India',
    number : '+91 8056012098',
};

function createTemplate (data) {
    var title = data.title;
    var number = data.number;
    var location = data.location;
        var htmlTemplate = `    
                <html>
                <title> ${title} </title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <style>
                html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
                </style>
                <body class="w3-light-grey">
                
                <!-- Page Container -->
                <div class="w3-content w3-margin-top" style="max-width:1400px;">
                
                  <!-- The Grid -->
                  <div class="w3-row-padding">
                  
                    <!-- Left Column -->
                    <div class="w3-third">
                    
                      <div class="w3-white w3-text-grey w3-card-4">
                        <div class="w3-display-container">
                          <img src="https://pbs.twimg.com/profile_images/928926919273283584/hiXMkRqy_400x400.jpg" style="width:100%" alt="Avatar">
                          <div class="w3-display-bottomleft w3-container w3-text-black">
                            <h2>Sandeep Baskaran</h2>
                          </div>
                        </div>
                        <br>
                        <div class="w3-container">
                          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Web Developer</p>
                          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> ${location} </p>
                          <a href="mailto:sandeepbaskaran98@gmail.com" class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal">sandeepbaskaran98@gmail.com </a>
                          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i> ${number} </p>
                          <hr>
                          <br>
                          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                          <p>Tamil</p>
                          <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
                          </div>
                          <p>English</p>
                          <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>
                          </div>
                          <p>Telugu (vocal)</p>
                          <div class="w3-light-grey w3-round-xlarge">
                            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>
                          </div>
                          <br>
                        </div>
                      </div><br>
                
                    <!-- End Left Column -->
                    </div>
                
                    <!-- Right Column -->
                    <div class="w3-twothird">
                    
                      <div class="w3-container w3-card w3-white w3-margin-bottom">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                        <div class="w3-container">
                          <h5 class="w3-opacity"><b>Intern at ktech Ventures</b></h5>
                          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2018 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                          <hr>
                        </div>
                        <div class="w3-container">
                          <h5 class="w3-opacity"><b>Web Developer / kiotekdigi.com</b></h5>
                          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2018 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                          <hr>
                        </div>
                      </div>
                
                      <div class="w3-container w3-card w3-white">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                        <div class="w3-container">
                          <h5 class="w3-opacity"><b>Electronics &amp; Instrumentation Engineering </b></h5>
                          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                          <p>Bachelor Degree</p>
                        </div>
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Skills</h2>
                        <div class="w3-container">
                          <p>HTML</p>
                          <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>
                          </div>
                          <p>CSS</p>
                          <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:60%">
                              <div class="w3-center w3-text-white">60%</div>
                            </div>
                          </div>
                          <p>PHP</p>
                          <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:60%">60%</div>
                          </div>
                          <p>NodeJs</p>
                          <div class="w3-light-grey w3-round-xlarge w3-small">
                            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>
                          </div>
                          <br>
                        </div>
                      </div>
                
                    <!-- End Right Column -->
                    </div>
                    
                  <!-- End Grid -->
                  </div>
                  
                  <!-- End Page Container -->
                </div>
                
                <footer class="w3-container w3-teal w3-center w3-margin-top">
                   <em>"Innovation distinguishes between a leader and a follower."</em><br /> - Steve Jobs
                </footer>
                
                </body>
                </html> 
            `;
            return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/encode', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'encode.html'));
});

app.get('/decode', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'decode.html'));
});

app.get('/404', function (req, res){
    res.send('ERROR:404 not found');
})

app.get('/profile', function (req, res) {
  res.send(createTemplate(profile));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/nash1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nash1.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 1998;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

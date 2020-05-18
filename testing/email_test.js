var nodemailer = require('nodemailer');
const config = require('../config.json');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config["contact_email"],
    pass: config["contact_email_password"]
  }
});

var mailOptions = {
  from: config["contact_email"],
  to: config["official_email"],
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

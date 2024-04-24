const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'keyes.nicholas2017@gmail.com',
    pass: 'F@tback6392'
  }
});

const mailOptions = {
  from: 'keyes.nicholas2017@gmail.com',
  to: 'keyes.nicholas2017@gmail.com',
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
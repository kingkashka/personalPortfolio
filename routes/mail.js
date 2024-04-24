const express = require("express");
const mailRouter = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'keyes.nicholas2017@gmail.com',
    pass: 'F@tback6392'
  }
});

mailRouter.post("/", (req, res, next) => {
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
 })
 module.exports = mailRouter

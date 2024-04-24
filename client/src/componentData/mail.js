const nodeMailer = require('nodemailer');

const html = `
<h1>Hello there!</h1>
<p>This is a test email.</p>
`;

async function main() {
    const transporter = nodeMailer.createTransport({
        host: 'mail.openjavascript.info',
        port: 465,
        secure: true,
        auth: {
            user: 'test',
            pass: 'your_password_here' // Provide the password here
        }
    });

    try {
        const info = await transporter.sendMail({
            from: 'OpenJavaScript <your_email@example.com>', // Provide your sender name and email
            to: 'keyes.nicholas2017@gmail.com', // Provide recipient email
            subject: 'Testing Nodemailer',
            html: html
        });
        console.log('Message sent: ' + info.messageId);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

main().catch(console.error);

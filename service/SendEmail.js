import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function sendEmail(to, subject, text, html) {
    console.log('Sending email to:', to);
    console.log('Using email:', process.env.EMAIL);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        },
        
    });
    

    let mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export default sendEmail;

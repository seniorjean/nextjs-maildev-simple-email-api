// pages/api/send-email.js
import nodemailer from 'nodemailer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from '../../components/EmailTemplate';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, fullName, message } = req.body;

        // Render the email template to a string
        const emailHtml = ReactDOMServer.renderToString(
            <EmailTemplate fullName={fullName} email={email} message={message} />
        );

        // Configure the email transporter for MailDev
        const transporter = nodemailer.createTransport({
            host: 'maildev',
            port: 1025,
            ignoreTLS: true,
        });

        const mailOptions = {
            from: 'Management2@mynuumedspa.com',
            to: email,
            subject: 'New Contact',
            html: emailHtml,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

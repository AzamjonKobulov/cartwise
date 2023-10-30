import nodemailer from 'nodemailer';
export async function sendEmail(to:string, subject:string, html:string) {
    console.log('sendEmail', to, subject, html, process.env.EMAIL_USER);
    // log all relevant environment variables
    const config = {
        host: process.env.EMAIL_HOST || 'smtp.sendgrid.net',
        port: parseInt((process.env.EMAIL_PORT || 465) as string),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    };

    console.log('config', config);
    const transporter = nodemailer.createTransport(config);

    const send = {
        from: process.env.EMAIL_FROM || 'cartwiseteam@gmail.com',
        to,
        subject,
        html
    };
    console.log('Sending email', send);

    await transporter.sendMail(send);
}
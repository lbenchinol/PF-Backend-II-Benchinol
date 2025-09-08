import nodemailer from 'nodemailer';
import config from './config.js';

const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        port: 587,
        auth: {
            user: "lucasbenchinol@gmail.com",
            pass: config.passGmail
        }
    }
)

export const sendEmail = (to, subject, message) => {
    return transporter.sendMail(
        {
            from: `Lucas Benchinol lucasbenchinol@gmail.com`,
            to,
            subject,
            html: message,
            attachments: [
                {
                    path: "src/nodeMailer/images/ecommerce_logo_2-c006fba1.png",
                    filename: "ecommerce_logo_2-c006fba1.png",
                    cid: "ecommerce_logo_2-c006fba1"
                },
                {
                    path: "src/nodeMailer/images/ecommerce_logo_3-1bf3f503.png",
                    filename: "ecommerce_logo_3-1bf3f503.png",
                    cid: "ecommerce_logo_3-1bf3f503"
                },
                {
                    path: "src/nodeMailer/images/image-1737475186248.png",
                    filename: "image-1737475186248.png",
                    cid: "image-1737475186248"
                },
                {
                    path: "src/nodeMailer/images/image-17331566261820.png",
                    filename: "image-17331566261820.png",
                    cid: "image-17331566261820"
                }
            ]
        }
    )
}
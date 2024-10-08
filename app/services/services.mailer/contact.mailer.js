import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import { promisify } from 'util';

export default {
  async sendMail(userContactData) {
    const readFile = promisify(fs.readFile);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    const html = await readFile(
      './app/services/services.mailer/contact.html',
      'utf8',
    );
    const template = handlebars.compile(html);
    const data = {
      firstname: userContactData.firstname,
      lastname: userContactData.lastname,
      email: userContactData.email,
      phone: userContactData.phone,
      message: userContactData.message,
      agree: userContactData.agree,
    };
    const htmlToSend = template(data);

    const mailOptions = {
      // ! In production : Change by the mail of the website or a mail created for the website
      from: 'louison.haas@hotmail.com',
      // ! In production : Change for mail of Louison
      to: 'louison.haas@hotmail.com',
      subject: `Nouvelle demande de contact de ${data.firstname} ${data.lastname}`,
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  },
};

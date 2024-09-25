import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

// Initialise le navigateur Puppeteer une fois
const browserPromise = puppeteer.launch({
  args: ['--allow-file-access-from-files'],
});

export default {
  async createPdf(giftCardData) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    // Remplacez les placeholders dans votre template HTML
    let templateHtml = fs.readFileSync(
      path.join(__dirname, 'giftCard.html'),
      'utf8',
    );
    templateHtml = templateHtml
      .replace('{{name}}', giftCardData.name)
      .replace('{{date}}', giftCardData.date)
      .replace('{{receivedName}}', giftCardData.receivedName)
      .replace('{{receivedEmail}}', giftCardData.receivedEmail)
      .replace('{{senderName}}', giftCardData.senderName);

    // Initialise le navigateur Puppeteer
    const browser = await browserPromise;

    // Utilisez puppeteer pour créer un PDF à partir de votre HTML
    const page = await browser.newPage();
    await page.setContent(templateHtml);
    // Attend que la page soit chargée et que tous les éléments soient rendus
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const pdfPath = path.join(__dirname, 'carte-cadeau.pdf');
    await page.pdf({ path: pdfPath });
    return pdfPath;
  },

  async sendEmailWithPdf(giftCardData, emailPath) {
    const pdfPath = await this.createPdf(giftCardData);
    const htmlToSend = await this.createMailToHtml(giftCardData, emailPath);

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    let mailOptions = {
      from: 'louison.haas@hotmail.com',
      to: giftCardData.receivedEmail,
      subject: 'Votre Carte Cadeau',
      html: htmlToSend,
      attachments: [
        {
          filename: 'CarteCadeau.pdf',
          path: pdfPath,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message envoyé: %s', info.messageId);
      fs.unlinkSync(pdfPath);
    });
  },

  async createMailToHtml(giftCardData, emailPath) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const readFile = promisify(fs.readFile);
    const html = await readFile(
      path.join(__dirname, `email${emailPath}.html`),
      'utf8',
    );

    // Attend le chargement complet de l'image avant de continuer
    const browser = await browserPromise;
    const page = await browser.newPage();
    await page.setContent(html);
    // Attend une seconde pour s'assurer que le contenu est rendu
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const template = handlebars.compile(html);
    const data = {
      name: giftCardData.name,
      date: giftCardData.date,
      receivedName: giftCardData.receivedName,
      receivedEmail: giftCardData.receivedEmail,
      senderName: giftCardData.senderName,
    };
    return template(data);
  },
};

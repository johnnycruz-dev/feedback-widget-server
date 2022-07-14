import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "350da18a5e0150",
    pass: "d6564a06be86fc"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({
    subject,
    body
  }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Johnny Cruz <johnnycruzdev@gmail.com>',
      subject,
      html: body
    })
  };
}
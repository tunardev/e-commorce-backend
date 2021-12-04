import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "mds43vi6nviwucqv@ethereal.email",
      pass: "xJsQzVAuFYKqx5xUR9",
    },
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: to,
    subject: "Change password",
    html,
  });
}

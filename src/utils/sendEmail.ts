import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: to,
    subject: "Change password",
    html,
  });
}

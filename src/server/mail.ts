"use server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
});

export const sendMail = async (
  to: string,
  subject: string,
  text?: string,
  html?: string
) => {
  await transport.sendMail({
    from: process.env.MAILER_USER,
    to,
    subject,
    text,
    html,
  });
};

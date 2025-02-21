import CONSTANTS from "@/constants/constants";
import Constants from "@/constants/constants";
import nodemailer from "nodemailer";

export const revalidate = 60;

export async function GET() {
  return Response.json({ msg: "Hello from API" });
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message, subject, phone } =
      await request.json();

    if (!firstName || !email || !message)
      return new Response("All fields are required", { status: 400 });
    const transporter = nodemailer.createTransport({
      host: CONSTANTS.MAIL.HOST,
      auth: {
        user: CONSTANTS.MAIL.USER,
        pass: CONSTANTS.MAIL.PASS,
      },
    });

    const mailOptions = {
      from: CONSTANTS.MAIL.SENDER,
      to: CONSTANTS.MAIL.RECEIVER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
      New Contact Form Submission:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Subject: ${subject}
      Message: 
      ${message}
      `,
    };

    let result = await transporter.sendMail(mailOptions);
    console.log("Result -- ", result);

    return Response.json({
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("Error:", error);
    return new Response("Something went wrong while sending the email", {
      status: 500,
    });
  }
}

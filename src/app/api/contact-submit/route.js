// import connectToDB from "../../../utils/dbconfig";
// import Contact from "../../../model/contact";

// export async function POST(req) {
//   try {
//     await connectToDB();
//     const data = await req.json();

//     // Validate required fields
//     const { name, number, loan_type, subject, message } = data;
//     if (!name || !number || !loan_type || !subject || !message) {
//       return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
//     }

//     const newContact = new Contact(data);
//     await newContact.save();

//     return new Response(JSON.stringify({ message: "Contact form submitted successfully." }), { status: 200 });
//   } catch (error) {
//     console.error("Contact API Error:", error);
//     return new Response(JSON.stringify({ message: "Failed to submit form." }), { status: 500 });
//   }
// }
// import connectToDB from "../../../utils/dbconfig";
// import Contact from "../../../model/contact";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     await connectToDB();
//     const data = await req.json();

//     // Validate required fields
//     const { name, number, loan_type, subject, message } = data;
//     if (!name || !number || !loan_type || !subject || !message) {
//       return new Response(
//         JSON.stringify({ message: "All fields are required." }),
//         { status: 400 }
//       );
//     }

//     // Save contact to MongoDB
//     const newContact = new Contact(data);
//     await newContact.save();

//     // --- Nodemailer setup ---
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // you can change this to your provider
//       auth: {
//         user: process.env.SMTP_USER, // your email
//         pass: process.env.SMTP_PASS, // your app password
//       },
//     });

//     const mailOptions = {
//       from: `"Contact Form" <${process.env.SMTP_USER}>`,
//       to: "jagodanaabhay@gmail.com", // replace with your email
//       subject: `New Contact Form Submission: ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Number:</strong> ${number}</p>
//         <p><strong>Loan Type:</strong> ${loan_type}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ message: "Contact form submitted and email sent successfully." }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Contact API Error:", error);
//     return new Response(
//       JSON.stringify({ message: "Failed to submit form." }),
//       { status: 500 }
//     );
//   }
// }

import connectToDB from "../../../utils/dbconfig";
import Contact from "../../../model/contact";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();

    const { name, number, loan_type, subject, message } = data;
    if (!name || !number || !loan_type || !subject || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newContact = new Contact(data);
    await newContact.save();

    // ✅ Nodemailer transporter with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", // Zoho India (use smtp.zoho.com if global)
      port: 465, // 465 for SSL
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER, // your Zoho email (example: support@theloancompass.in)
        pass: process.env.SMTP_PASS, // your Zoho app password (not normal password!)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"The Loan Compass" <${process.env.SMTP_USER}>`, // must match Zoho account
      to: "bj@theloancompass.in", // recipient (your admin email)
      subject: `📩 New Contact Form Submission - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Loan Type:</strong> ${loan_type}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Contact form submitted and email sent successfully.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit form." }),
      { status: 500 }
    );
  }
}

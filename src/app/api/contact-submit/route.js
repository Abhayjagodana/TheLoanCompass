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
    const { name, number, loan_type, loanAmount, message } = data;

    // Validation
    if (!name || !number || !loan_type || !loanAmount || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Save to MongoDB
    await Contact.create(data);

    // ✅ Configure Zoho SMTP properly
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", // or "smtp.zoho.com" for global accounts
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // your Zoho email address
        pass: process.env.SMTP_PASS, // Zoho app password
      },
      tls: {
        rejectUnauthorized: false, // avoid SSL certificate issues
      },
    });
    
    // ✅ Email content
    const mailOptions = {
      from: `"The Loan Compass" <${process.env.SMTP_USER}>`,
      to: "bj@theloancompass.in", // where you receive inquiries
      subject: `📩 New Contact Form Submission`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Number:</strong> ${number}</p>
          <p><strong>Loan Type:</strong> ${loan_type}</p>
          <p><strong>Loan Amount:</strong> ${loanAmount}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Form submitted and email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit form.", error: error.message }),
      { status: 500 }
    );
  }
}

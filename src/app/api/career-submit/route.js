// import connectToDB from "../../../utils/dbconfig";
// import JobApplication from "../../../model/jobapply";

// export async function POST(req) {
//   try {
//     await connectToDB();

//     const data = await req.json();

//      // Validate required fields
//     if (!data.name || !data.number || !data.email) {
//       return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
//     }


//     const newApplication = new JobApplication(data);
//     await newApplication.save();

//     return new Response(
//       JSON.stringify({ message: "Form submitted successfully!" }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ message: "Failed to submit form" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


// import connectToDB from "../../../utils/dbconfig";
// import JobApplication from "../../../model/jobapply";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     await connectToDB();
//     const data = await req.json();

//     if (!data.name || !data.number || !data.email) {
//       return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
//     }

//     // Save to MongoDB
//     const newApplication = new JobApplication(data);
//     await newApplication.save();

//     // ✅ Setup Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USER, // your Gmail
//         pass: process.env.SMTP_PASS, // your App Password
//       },
//     });

//     const mailOptions = {
//       from: `"Job Application" <${process.env.SMTP_USER}>`,
//       to: "jagodanaabhay@gmail.com", // HR / receiver email
//       subject: `New Job Application - ${data.position || "Position"}`,
//       html: `
//         <h2>New Job Application Received</h2>
//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         <p><strong>Number:</strong> ${data.number}</p>
//         <p><strong>Position:</strong> ${data.position || "N/A"}</p>
//         <p><strong>Message:</strong> ${data.message || "No message"}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });

//   } catch (error) {
//     console.error("Error:", error);
//     return new Response(JSON.stringify({ message: "Failed to submit form" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


import connectToDB from "../../../utils/dbconfig";
import JobApplication from "../../../model/jobapply";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();

    if (!data.name || !data.number || !data.email) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Save to DB
    const newApplication = new JobApplication(data);
    await newApplication.save();

    // SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", // or smtp.zoho.com if US
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // must be a Zoho email (e.g. info@theloancompass.in)
        pass: process.env.SMTP_PASS, // Zoho app password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"Career Portal" <${process.env.SMTP_USER}>`, // ✅ Must be Zoho email
      to: "bj@theloancompass.in", // where to receive applications
      replyTo: data.email, // applicant’s email (so admin can reply directly)
      subject: "New Career Application",
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Number:</strong> ${data.number}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Job Types:</strong> ${data.job_type?.join(", ") || "N/A"}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Form submitted & email sent!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Career Submit Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit form", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

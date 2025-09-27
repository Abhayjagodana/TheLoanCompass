import connectToDB from "../../../utils/dbconfig";
import Contact from "../../../model/contact";

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();

    // Validate required fields
    const { name, number, loan_type, subject, message } = data;
    if (!name || !number || !loan_type || !subject || !message) {
      return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
    }

    const newContact = new Contact(data);
    await newContact.save();

    return new Response(JSON.stringify({ message: "Contact form submitted successfully." }), { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(JSON.stringify({ message: "Failed to submit form." }), { status: 500 });
  }
}

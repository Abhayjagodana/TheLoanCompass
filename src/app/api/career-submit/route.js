import connectToDB from "../../../utils/dbconfig";
import JobApplication from "../../../model/jobapply";

export async function POST(req) {
  try {
    await connectToDB();

    const data = await req.json();

     // Validate required fields
    if (!data.name || !data.number || !data.email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    
    const newApplication = new JobApplication(data);
    await newApplication.save();

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

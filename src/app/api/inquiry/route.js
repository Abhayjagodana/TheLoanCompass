import { NextResponse } from "next/server";
import connectToDB from "../../../utils/dbconfig"; // Your MongoDB connection
import Inquiry from "../../../model/Inquiry";

export async function POST(req) {
  try {
    await connectToDB(); // Connect to MongoDB
    const data = await req.json();

    const inquiry = await Inquiry.create(data);
    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to save inquiry" }, { status: 500 });
  }
}

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json(); // Parse the body content from the request

    // Send request to Flask server
    const response = await axios.post("http://127.0.0.1:5000/analyze", {
      text,
    });

  
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to analyze text" },
      { status: 500 }
    );
  }
}

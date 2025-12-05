import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      body
    );
    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json(
      err.response?.data || { message: "Login failed" },
      {
        status: err.response?.status || 500,
      }
    );
  }
}

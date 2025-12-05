import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { refreshToken } = await req.json();
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/refresh-token",
      { refreshToken }
    );
    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json(
      err.response?.data || { message: "Refresh failed" },
      {
        status: err.response?.status || 500,
      }
    );
  }
}

import { ConnectionDB } from "@/connection/connectionDB";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();
export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "logout successful",
      success: true,
    });
    response.cookies.delete("token");
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}

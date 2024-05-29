import { SignupSchema } from "@/lib/models/model";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { desCriptions, userId } = reqData;
    const Id = { _id: userId };
    const updateDescriptions = { descriptions: desCriptions };
    await SignupSchema.findByIdAndUpdate(Id, updateDescriptions);
    return NextResponse.json({
      message: "Descriptions is updated",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Description is not updated",
      success: false,
    });
  }
}

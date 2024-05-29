import { SignupSchema } from "@/lib/models/model";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { image, userId } = reqData;

    if (image == "" || userId == "") {
      return NextResponse.json({
        message: "Image is not updated",
        success: false,
      });
    } else {
      const Id = { _id: userId };
      const updateimage = { image: image };
      await SignupSchema.findByIdAndUpdate(Id, updateimage);
      return NextResponse.json({ message: "Image is updated", success: true });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Image is not updated",
      success: false,
    });
  }
}

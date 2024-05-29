import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { AboutPageSampleSchema } from "@/lib/models/model";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { sampleImage, sampleDescription, sampleLink, recentDate } = reqData;

    const preSend = await new AboutPageSampleSchema({
      sampleImage,
      sampleDescription,
      sampleLink,
      recentDate,
    });
    const sendProject = await preSend.save();
    return NextResponse.json({
      message: "Data is found",
      success: true,
      sendProject,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file not found", success: false });
  }
}

export async function GET() {
  try {
    const allAboutPageSamples = await AboutPageSampleSchema.find().sort({
      dateField: -1,
    });
    return NextResponse.json({
      message: "Data is here!",
      success: true,
      allAboutPageSamples,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file is not found", success: false });
  }
}

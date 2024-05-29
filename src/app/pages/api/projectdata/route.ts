import { NextRequest, NextResponse } from "next/server";
import { ConnectionDB } from "@/connection/connectionDB";
import { ProjectsSchema } from "@/lib/models/model";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { projectName, projectImage, projectLink, recentDate } = reqData;
    const preSend = await new ProjectsSchema({
      projectName,
      projectImage,
      projectLink,
      recentDate,
    });
    await preSend.save();
    return NextResponse.json({
      message: "Data is found",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file not found", success: false });
  }
}

export async function GET() {
  try {
    const allProjects = await ProjectsSchema.find().sort({ dateField: -1 });
    return NextResponse.json({
      message: "Data is here!",
      success: true,
      allProjects,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "file is not found", success: false });
  }
}

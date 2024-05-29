import { AboutPageSampleSchema, ProjectsSchema } from "@/lib/models/model";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest, res: any) {
  try {
    const userId = res.params.delete;
    const id = { _id: userId };
    await AboutPageSampleSchema.findByIdAndDelete(id);
    await ProjectsSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: "File is deleted", success: true });
  } catch (error: any) {
    return NextResponse.json({
      message: "File is not deleted",
      success: false,
    });
  }
}

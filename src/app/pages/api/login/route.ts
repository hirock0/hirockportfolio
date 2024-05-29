import { ConnectionDB } from "@/connection/connectionDB";
import { SignupSchema } from "@/lib/models/model";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { emailOrnumber, password } = reqBody;
    const findUser = await SignupSchema.findOne({
      emailOrnumber: emailOrnumber,
    });
    const verifyPassword = await bcrypt.compare(password, findUser.password);
    if (findUser && verifyPassword) {
      const tokenData = {
        id: findUser._id,
        name: findUser.name,
        emailOrnumber: findUser.emailOrnumber,
      };
      const token: any = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
        expiresIn: "1d",
      });
      const response = NextResponse.json({
        message: "login successfull",
        success: true,
      });
      response.cookies.set("token", token, { httpOnly: true });
      return response;
    } else {
      return NextResponse.json({
        message: "login not successfull",
        success: false,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "something went wrong",
      success: false,
    });
  }
}

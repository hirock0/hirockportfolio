import { ConnectionDB } from "@/connection/connectionDB";
import { SignupSchema } from "@/lib/models/model";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,
      emailOrnumber,
      password,
      contact,
      image,
      descriptions,
      recentDate,
    } = reqBody;
    const findUser = await SignupSchema.findOne({
      emailOrnumber: emailOrnumber,
    });
    if (findUser == null) {
      const hashPassword = await bcrypt.hash(password, 10);
      const preSaveData = await new SignupSchema({
        name,
        emailOrnumber,
        password: hashPassword,
        contact,
        image,
        descriptions,
        recentDate,
      });
      const SaveData = await preSaveData.save();
      const tokenData = {
        id: SaveData._id,
        name: SaveData.name,
        emailOrnumber: SaveData.emailOrnumber,
      };
      const token: any = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
        expiresIn: "1d",
      });
      const response = NextResponse.json({
        message: "Signup successful",
        success: true,
      });
      response.cookies.set("token", token, { httpOnly: true });
      return response;
    } else {
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
          message: "You have already this account",
          success: true,
        });
        response.cookies.set("token", token, { httpOnly: true });
        return response;
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Signup not successful",
      success: false,
    });
  }
}
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedData: any = Jwt.decode(token);
    const loggedUserId = decodedData.id;
    const Id = { _id: loggedUserId };
    const loggedUser = await SignupSchema.findById(Id).select("-password");
    const AllUser = await SignupSchema.find();
    return NextResponse.json({
      message: "All user found",
      success: true,
      loggedUser,
      AllUser,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}

import { ConnectionDB } from "@/connection/connectionDB";
import { AdminSignupSchema } from "@/lib/adminmodel/model";
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
    const findUser = await AdminSignupSchema.findOne({
      emailOrnumber: emailOrnumber,
    });
    if (findUser == null) {
      const hashPassword = await bcrypt.hash(password, 10);
      const preSaveData = await new AdminSignupSchema({
        name,
        emailOrnumber,
        password: hashPassword,
        contact,
        image,
        descriptions,
        recentDate,
      });
      const SaveData = await preSaveData.save();
      const admintokenData = {
        id: SaveData._id,
        name: SaveData.name,
        emailOrnumber: SaveData.emailOrnumber,
      };
      const admintoken: any = Jwt.sign(
        admintokenData,
        process.env.TOKEN_SECRET!,
        { expiresIn: "1d" }
      );
      const response = NextResponse.json({
        message: "Signup successful",
        success: true,
      });
      response.cookies.set("admintoken", admintoken, { httpOnly: true });
      return response;
    } else {
      const verifyPassword = await bcrypt.compare(password, findUser.password);
      if (findUser && verifyPassword) {
        const admintokenData = {
          id: findUser._id,
          name: findUser.name,
          emailOrnumber: findUser.emailOrnumber,
        };
        const admintoken: any = Jwt.sign(
          admintokenData,
          process.env.TOKEN_SECRET!,
          { expiresIn: "1d" }
        );
        const response = NextResponse.json({
          message: "You have already this account",
          success: true,
        });
        response.cookies.set("admintoken", admintoken, { httpOnly: true });
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
    const admintoken = request.cookies.get("admintoken")?.value || "";
    const decodedData: any = Jwt.decode(admintoken);
    const loggedUserId = decodedData.id;
    const Id = { _id: loggedUserId };
    const AdminloggedUser = await AdminSignupSchema.findById(Id).select(
      "-password"
    );
    const AdminAllUser = await AdminSignupSchema.find();
    return NextResponse.json({
      message: "All user found",
      success: true,
      AdminloggedUser,
      AdminAllUser,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}

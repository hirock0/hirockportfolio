import mongoose from "mongoose";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();

const AdminsignupData = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "fill the field"],
  },
  emailOrnumber: {
    type: String,
    required: [false, "fill the field"],
  },
  password: {
    type: String,
    required: [false, "fill the field"],
  },
  contact: {
    type: String,
    required: [false, "fill the field"],
  },
  image: {
    type: String,
    required: [false, "fill the field"],
  },
  descriptions: {
    type: String,
    required: [false, "fill the field"],
  },
  recentDate: {
    type: String,
    required: [false, "fill the field"],
  },
  dateField: {
    type: Date,
    required: false,
    default: Date.now,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
});

export const AdminSignupSchema =
  mongoose.models.admin_details ||
  mongoose.model("admin_details", AdminsignupData);

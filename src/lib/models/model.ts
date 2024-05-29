import mongoose from "mongoose";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();

const signupData = new mongoose.Schema({
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

export const SignupSchema =
  mongoose.models.users || mongoose.model("users", signupData);

const ProjectsData = new mongoose.Schema({
  projectName: {
    type: String,
    required: [false, "fill the field"],
  },
  projectImage: {
    type: String,
    required: [false, "fill the field"],
  },
  projectLink: {
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
});

export const ProjectsSchema =
  mongoose.models.projects || mongoose.model("projects", ProjectsData);

const about_page_SamplesData = new mongoose.Schema({
  sampleImage: {
    type: String,
    required: [false, "fill the field"],
  },
  sampleDescription: {
    type: String,
    required: [false, "fill the field"],
  },
  sampleLink: {
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
});

export const AboutPageSampleSchema =
  mongoose.models.about_page_work_samples ||
  mongoose.model("about_page_work_samples", about_page_SamplesData);

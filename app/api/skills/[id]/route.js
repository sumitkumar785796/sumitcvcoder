import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import skillModel from "@/model/skill.model";

// Function to handle GET request for a specific skill
export async function GET(req, { params }) {
  try {
    await connectDB();
    
    // Extract `id` from params
    const { id } = params;
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    // Find skill by ID
    const skill = await skillModel.findById(id);
    if (!skill) return NextResponse.json({ error: "Skill not found" }, { status: 404 });

    return NextResponse.json(skill, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

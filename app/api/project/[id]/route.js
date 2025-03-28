import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import projectModel from "@/model/project.model";

// Function to handle GET request for a specific project
export async function GET(req, { params }) {
  try {
    await connectDB();
    
    // Extract `id` from params
    const { id } = params;
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    // Find project by ID
    const project = await projectModel.findById(id);
    if (!project) return NextResponse.json({ error: "project not found" }, { status: 404 });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

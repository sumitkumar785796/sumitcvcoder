import connectDB from "@/lib/db";
import projectModel from "@/model/project.model";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

// Disable Next.js default body parser
export const config = {
    api: {
        bodyParser: false,
    },
};

// Handle File Upload (POST Request)
export async function POST(req) {
    await connectDB();

    try {
        // Parse Form Data using Next.js built-in support
        const formData = await req.formData();

        const file = formData.get("file"); // Get file
        const title = formData.get("title");
        const desc = formData.get("desc");
        const url = formData.get("url");

        if (!file) {
            return NextResponse.json({ message: "No file uploaded." }, { status: 400 });
        }

        // Convert file to a Buffer
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        // Upload to Cloudinary using a Promise
        const cloudinaryResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    public_id: `${Date.now()}_${file.name}`.replace(/\s+/g, "_"),
                    resource_type: "image",
                },
                (error, result) => {
                    if (error) reject(error);
                    resolve(result);
                }
            );

            stream.end(fileBuffer);
        });

        // Save data to MongoDB
        const newSkill = new projectModel({
            file: cloudinaryResult.secure_url,
            title,
            desc,
            url,
        });

        await newSkill.save();

        return NextResponse.json(newSkill, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Handle GET Request
export async function GET() {
    await connectDB();
    try {
        const project = await projectModel.find();
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });

    }
}

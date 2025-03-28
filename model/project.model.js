import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    desc: { type: String, required: true },
    file: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

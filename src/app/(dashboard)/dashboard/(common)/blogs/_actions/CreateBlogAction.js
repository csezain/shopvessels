"use server";

import { uploadAssetsFileToS3 } from "@/database/actions/ThumbnailUploadAction";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import { revalidatePath } from "next/cache";

export async function CreateBlogAction(formData) {
  try {
    const file = formData.get("thumbnail");
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");

    if (!file || !title || !description || !category) {
      return "INCLUDE ALL FIELDS";
    }

    // TODO: Implement Admin checkpoint security

    const { publicUrl, S3Key } = await uploadAssetsFileToS3(file);
    await connectDB();

    const blogModel = new BlogModel({
      title,
      description,
      category,
      image: publicUrl,
      S3Key,
    });

    const saved = await blogModel.save();

    revalidatePath("/dashboard/blog", "page");

    return { success: true, _id: saved._id.toString() };
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/sampleJson", "student.json");
    const data = await fs.readFile(filePath, "utf8");

    const studentsiInfo = JSON.parse(data).students;

    return NextResponse.json(studentsiInfo);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

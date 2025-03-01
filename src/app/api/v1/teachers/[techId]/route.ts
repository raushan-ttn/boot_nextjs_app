import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Correctly define the params type
export async function GET(
  request: Request,
  { params }: { params: Promise<{ techId: string }> }
) {
  const techId = (await params).techId;

  try {
    const filePath = path.resolve(process.cwd(), "src/sampleJson/student.json");
    const data = await fs.readFile(filePath, "utf8");

    const parsedData = JSON.parse(data);
    if (!parsedData.students) {
      return NextResponse.json(
        { error: "Invalid JSON structure: 'students' key not found." },
        { status: 500 }
      );
    }

    const filteredStudents = parsedData.students.filter(
      (student: { teacher_id: string }) => student.teacher_id === techId
    );

    return NextResponse.json(filteredStudents);
  } catch (error) {
    console.error("Error reading student data:", error);
    return NextResponse.json(
      { error: `Failed to load data: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}

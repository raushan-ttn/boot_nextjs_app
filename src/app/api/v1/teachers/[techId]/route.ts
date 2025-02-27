import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
type ParamsType = {
  params: { teacher_id: string };
};

export async function GET(req: Request, { params }: ParamsType) {
  // Extract teacher_id from params.
  const { teacher_id } = await params;

  try {
    const filePath = path.join(process.cwd(), "src/sampleJson", "student.json");
    const data = await fs.readFile(filePath, "utf8");

    const studentsInfo = JSON.parse(data).students;

    const filteredStudents = studentsInfo.filter(
      (student: { teacher_id: string }) => student.teacher_id === teacher_id
    );
    return NextResponse.json(filteredStudents);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

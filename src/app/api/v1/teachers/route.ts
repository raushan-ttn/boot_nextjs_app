import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/sampleJson", "student.json");
    console.log(filePath, "filePath");
    const data = await fs.readFile(filePath, "utf8");

    // Parse JSON data
    const teachers = JSON.parse(data).teachers;

    // Return JSON response
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

/**
 * POST method to create a new teacher
 * @param req
 * @param res
 * @returns
 */
export async function POST(req: Request, res: Response) {
  // Extract request body
  const body = await req.json();
  try {
    const filePath = path.join(process.cwd(), "src/sampleJson", "student.json");
    console.log(filePath, "filePath");
    const data = await fs.readFile(filePath, "utf8");
    const teachers = JSON.parse(data).teachers;
    const students = JSON.parse(data).students;

    // Add new teacher
    teachers.push(body);

    // Write to JSON file
    await fs.writeFile(
      filePath,
      JSON.stringify({ teachers, students }, null, 2)
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
  // Return JSON response
  return NextResponse.json(
    {
      message: `Teacher ${body?.name} created.`,
    },
    {
      status: 201,
    }
  );
}

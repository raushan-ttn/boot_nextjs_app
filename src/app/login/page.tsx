import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import LoginSection from "@/components/Login";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return <LoginSection />;
}

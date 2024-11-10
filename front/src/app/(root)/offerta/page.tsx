import { MAIN_URL } from "@/shared/config";
import { redirect } from "next/navigation";

export default async function VacancyPage() {
  return redirect(MAIN_URL.categories())
}
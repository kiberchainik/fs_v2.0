import { buttonVariants } from "@/shared/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div>Home page <Link href='/auth/login' className={buttonVariants()}>Login</Link></div>
  );
}
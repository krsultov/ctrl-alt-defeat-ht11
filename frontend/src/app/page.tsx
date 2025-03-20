import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
        <div className="text-3xl">Home Page</div>
        <Link href={"/Register"}>Register</Link>
        <Link href={"/Login"}>Login</Link>

    </div>
  );
}

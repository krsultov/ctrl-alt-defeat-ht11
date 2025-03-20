import { LoginForm } from "@/components/login-form";
import Link from "next/link";

export default function Login(){
    return(
        <div>
            <div className="text-3xl">Login</div>
            <Link href={"/"}>Home</Link>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
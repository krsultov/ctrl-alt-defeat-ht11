import { RegisterForm } from "@/components/register-form";
import Link from "next/link";

export default function Register(){
    return(
        <div>
            <div className="text-3xl">Register</div>
            <Link href={"/"}>Home</Link>
            <div>
                <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-sm">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
import Link from "next/link"
export default function Home() {
    return (
        <div className="flex flex-col">
            <Link href={"/Signup"}>Signup</Link>
            <Link href={"/Login"}>Login</Link>
            <Link href={"/Transactions"}>Transactions</Link>
            <Link href={"/Subscriptions"}>Subscriptions</Link>
        </div>
    )
}

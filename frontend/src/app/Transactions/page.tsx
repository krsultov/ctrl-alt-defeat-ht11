import Link from "next/link";

export default function Transactions(){
    return(
        <div>
            <div className="text-3xl">Transactions</div>
            <Link href={"/"}>Home</Link>
        </div>
    );
}
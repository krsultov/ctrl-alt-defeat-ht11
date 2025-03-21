import { Button, Typography } from "@mui/material"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-screen min-h-screen">
                <Typography variant="h4" className="mb-4">
                    <span className="text-primary font-bold">identi</span>
                    <span className="text-secondary font-bold">Pay</span>
                </Typography>
                <Typography fontWeight={550} color="default" fontSize={23}>
                    <span className="text-gray-400">Redefining the way you pay.</span>
                </Typography>
                <Link href="/Signup">
                    <Button variant="contained">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

import type { Metadata } from "next"
import "./globals.css"
import Nav from "./(components)/Nav"

export const metadata: Metadata = {
    title: "IdentiPay",
    description: "IdentiPay"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <div className="flex flex-grow w-full py-6 px-8">{children}</div>
            </body>
        </html>
    )
}

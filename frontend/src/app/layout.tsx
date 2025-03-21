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
                <div>{children}</div>
            </body>
        </html>
    )
}

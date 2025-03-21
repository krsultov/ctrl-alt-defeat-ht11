import type { Metadata } from "next"
import "./globals.css"

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
            <body>{children}</body>
        </html>
    )
}

import { Metadata } from "next" // Import Metadata from Next.js
import Nav from "./(components)/Nav" // Your Nav component
import "./globals.css" // Your global styles

export const metadata: Metadata = {
    title: "IdentiPay",
    description: "IdentiPay"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <div className="flex-grow">{children}</div>
            </body>
        </html>
    )
}

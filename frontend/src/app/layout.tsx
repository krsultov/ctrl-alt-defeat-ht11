// layout.tsx
import { Metadata } from "next" // Import Metadata from Next.js
import Nav from "./(components)/Nav" // Your Nav component
import "./globals.css" // Your global styles
import FilterContextProvider from "./(contexts)/FilterContextProvider"

// No "use client" directive here, since this is a server-side component

// Server component: metadata should be used in server components
export const metadata: Metadata = {
    title: "IdentiPay",
    description: "IdentiPay"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <FilterContextProvider>
                    <Nav />
                    <div className="flex-grow">{children}</div>
                </FilterContextProvider>
            </body>
        </html>
    )
}

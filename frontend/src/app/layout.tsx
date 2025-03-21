import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "IdentiPay",
    description: "IdentiPay"
}
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        main: "#E3D026",
        light: "#E9DB5D",
        dark: "#A29415",
        contrastText: "#242105"
    }
})

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

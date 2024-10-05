import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aqwam Hizbal Muhshiy - Personal Portfolio Website",
    description: "Aqwam Hizbal Muhshiy's personal portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

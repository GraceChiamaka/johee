import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@components/core";

export const metadata: Metadata = {
    title: "Jobwhee",
    description: "Job listing application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="bg-primary-100 w-full font-poppins">
                    <div className="192xl:px-[240px] 144xl:px-[120px] 86xl:px-10 px-4 py-8 86xl:py-8 144xl:py-8 192xl:py-6">
                        <Nav />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}

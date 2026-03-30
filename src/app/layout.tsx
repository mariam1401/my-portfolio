import "./globals.css";
import { Poppins } from "next/font/google";
import "animate.css";
import type { Metadata } from "next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Portfolio | Mariam Karapetyan",
    description: "Frontend Developer Portfolio - Mariam Karapetyan",


    openGraph: {
        title: "Portfolio | Mariam Karapetyan",
        description: "Frontend Developer Portfolio - Mariam Karapetyan",
        url: "https://mariam-karapetyan.vercel.app/",
        siteName: "Portfolio | Mariam Karapetyan",
        images: [
            {
                url: "https://mariam-karapetyan.vercel.app/preview.png",
                width: 1200,
                height: 630,
                alt: "Mariam Karapetyan - Frontend Developer Portfolio",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        images: ["https://mariam-karapetyan.vercel.app/preview.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
        <body className="font-sans">
        {children}
        </body>
        </html>
    );
}

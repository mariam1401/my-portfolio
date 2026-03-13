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
        url: "https://karapetyan-mariam-portfolio.vercel.app",
        siteName: "Portfolio | Mariam Karapetyan",
        images: [
            {
                url: "/preview.png",
                width: 1200,
                height: 630,
                alt: "Preview Image",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        images: ["/preview.png"],
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

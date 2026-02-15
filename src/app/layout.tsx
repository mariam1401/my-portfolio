import "./globals.css";
import { Poppins } from "next/font/google";
import "animate.css";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
    <body className="font-sans ">
    {children}
      </body>
    </html>
  );
}

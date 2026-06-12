import "./globals.css";
import dotenv from "dotenv";
dotenv.config();
export const metadata = {
  title: "Weather App",
  description: "A modern weather application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}

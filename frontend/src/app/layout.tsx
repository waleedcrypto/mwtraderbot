import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MW TRADER",
  description: "Premium Trading Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex items-center justify-center p-4">
        {/* Main App Container wrapping the screens tightly like the screenshots */}
        <div className="w-full max-w-md bg-[#0D0518] rounded-[2rem] p-6 shadow-2xl relative overflow-hidden min-h-[85vh] flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

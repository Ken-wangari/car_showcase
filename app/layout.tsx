import { Footer, Navbar } from "@/components";
import "./globals.css";

export const  Metadata = {
  title: "Thee Car Hub",
  description: "Discover the best Machines in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
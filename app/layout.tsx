import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "A+ Training",
  description: "App to get you pumped up!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lg:min-w-full min-w-fit items-center justify-center">
        <Navbar />
        {children}
        <Hero />
        <Membership />
      </body>
    </html>
  );
}

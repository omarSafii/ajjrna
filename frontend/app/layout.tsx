import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileNavbar from "@/components/MobileNavbar";
import { jostFont, montserratFont } from "@/config/fonts/fontConfig";
import siteConfig from "@/config/siteConfig";
import "./globals.css";

export function generateMetadata() {
  return siteConfig();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.variable} ${jostFont.variable} bg-background-01 font-jost antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileNavbar />
      </body>
    </html>
  );
}

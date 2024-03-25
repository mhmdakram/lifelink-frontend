import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "LifeLink - Book Your Doc",
  description: "Book your favorite doctor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header />
          {children}
          <Toaster />
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}

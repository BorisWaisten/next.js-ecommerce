import "./globals.css";
import Header from "@/components/Header/Header";
import { NextAuthProvider } from "@/components/Provider/SessionProvider";
import Footer from "@/components/Footer/Footer";
import { inter, poppins } from "./font";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "App Ecommerce",
  icons: {
    icon: ShoppingBagIcon,
  }
};

export default function Layout({ children }) {
  

  
  return (
    <html lang="en">
      <body className= {`antialiased  flex flex-col min-h-screen ${inter.className}`} >
        <NextAuthProvider>
          <Header />
          <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
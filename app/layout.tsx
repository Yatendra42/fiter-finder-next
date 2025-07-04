import Footer from "./components/Footer";
import Header from "./components/Header";
import type { ReactNode } from "react";
import './styles/main.scss'; // Import global styles

export const metadata = {
  title: 'My Next App',
  description: 'A simple Next.js site with routing and components',
};

export default function RootLayout({ children } : { children: ReactNode }) {
  return (
    <html lang="en">
        <head>
          {/* Add Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
      <body  cz-shortcut-listen="true">
        
          
        <Header />
        <main>{children}</main>
        <Footer />
       
      </body>
    </html>
  );
}
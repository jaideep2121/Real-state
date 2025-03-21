import { Geist, Geist_Mono } from "next/font/google";

import { ToastContainer } from 'react-toastify';
import "./globals.css";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WESTIN Residence",
  description: "Westin Residence - Find your perfect real estate property today.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/public/window.svg',
        href: '/west.png',
      },,
    
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <header>
          <Image 
            src="/west.png" 
            alt="Westin Residence Logo" 
            width={150} 
            height={50} 
            priority 
          />
        </header>
      
      <ToastContainer /> {/* Self-closing component */}
      {children}
    </body>
  </html>
  );
}

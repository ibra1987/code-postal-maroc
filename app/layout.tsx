import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import {GoogleAnalytics} from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import { Inter } from "next/font/google"
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] })



export const metadata :Metadata  ={
  verification:{
    other:{
      monetag:"5688dccfac0dc174d6c5c1479b4b12d0"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Script
          strategy="lazyOnload"
          data-cfasync="false"
          src="//pl26152001.effectiveratecpm.com/9e7f6cf20fea09d635265a8131dda125/invoke.js"
        />
      <body
        className={`${inter.className} antialiased relative bg-slate-100`}
      >
        {/**adsterra ad interstitial*/}
        
    
        <div className="w-full  px-3 md:px-10 bg-slate-100   sticky top-0 z-50">
        <Header/>
        </div>
        <div className="  mx-auto px-3 md:px-10 flex flex-col justify-start items-center w-full   ">
        <div id="container-9e7f6cf20fea09d635265a8131dda125"></div>

        {children}
        <Analytics/>
        </div>
        <Footer/>
      <GoogleAnalytics gaId="G-D0493NM11N"/>
      </body>
    </html>
  );
}

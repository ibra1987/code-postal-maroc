import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import {GoogleAnalytics} from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/**propellar ads interstitial*/}

      <Script
        id="external-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8897875,document.createElement('script'))`,
        }}
      />
        <div className="w-full bg-red-600 px-3 md:px-20">
        <Header/>
        </div>
        <div className=" mx-auto flex flex-col justify-start items-center w-full   ">
          
        {children}
        <Analytics/>
        </div>
        <Footer/>
      <GoogleAnalytics gaId="G-D0493NM11N"/>
      </body>
    </html>
  );
}

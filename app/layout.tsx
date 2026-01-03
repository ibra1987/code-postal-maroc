import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import {GoogleAnalytics} from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })



export const metadata: Metadata = {
  metadataBase: new URL('https://www.codepostalmaroc.com'),
  title: {
    default: 'Code Postal Maroc | Guide Complet des Codes Postaux',
    template: '%s | Code Postal Maroc',
  },
  description: 'Trouvez facilement les codes postaux de toutes les agences, villes et régions du Maroc. Base de données complète et à jour.',
  keywords: ['code postal maroc', 'codes postaux maroc', 'agences postales maroc', 'poste maroc'],
  authors: [{ name: 'Code Postal Maroc' }],
  creator: 'Code Postal Maroc',
  publisher: 'Code Postal Maroc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://www.codepostalmaroc.com',
    siteName: 'Code Postal Maroc',
    title: 'Code Postal Maroc',
    description: 'Guide complet des codes postaux au Maroc',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Postal Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Postal Maroc',
    description: 'Guide complet des codes postaux au Maroc',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://www.codepostalmaroc.com" />
      </head>
      <body
        className={`${inter.className} antialiased relative bg-slate-100`}
      >
        {/**adsterra ad interstitial*/}
        
    
        <div className="w-full  px-3 md:px-12 lg:px-24 bg-slate-100/50 backdrop-blur-3xl   sticky top-0 z-50">
        <Header/>
        </div>
        <div className="  mx-auto px-3 md:px-12 lg:px-24 flex flex-col justify-start items-center w-full   ">
      


        {children}
        <Analytics/>
        </div>
        <Footer/>
      <GoogleAnalytics gaId="G-D0493NM11N"/>
      </body>
    </html>
  );
}

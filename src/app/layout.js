import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Curser from "./components/Curser";
import Loading from "./components/Loading";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NS Pixel - Creative Web Design & Development Solutions",
  description: "Unleash your website's potential with NoSleepPixel's creative collective. Explore our services in web design, e-commerce, personal websites, and more.",
  keywords: "NoSleepPixel, web design, front-end solutions, responsive design, e-commerce, personal websites, business ads, digital experiences, creative collective, web development, user-friendly websites, digital services, website support, mobile-friendly websites, no sleep pixel",
  canonical: "https://www.nosleeppixel.online/",
  author: "NoSleepPixel Team",
  verification: {
    google: "iqBZlpB1PVOiVBbSRjWupbw6Ey4nZHfWln_nXYvVVuI",
  },
  alternates: {
    canonical: "https://www.nosleeppixel.online/",
  },
  openGraph: {
    title: 'NoSleepPixel | Creative Web Design & Development Solutions',
    description: "Unleash your website's potential with NoSleepPixel's creative collective. Explore our services in web design, e-commerce, personal websites, and more.",
    image: "media/design1.webp",
    url: "https://www.nosleeppixel.online/",
    type: "website",
    site_name: "NoSleepPixel",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header/>
        <Curser/>
        <Loading/>
        <p className="fixed right-0 top-1/3 origin-bottom-right -rotate-90 bg-[#EDBFFF] px-5 py-3 rounded-[20px_20px_0_0] text-[#0F0D0D] font-extrabold text-[2vmin] z-[500] border-[#0F0D0D] border-2 border-b-0">Under Development 🚧</p>
        {children}</body>
    </html>
  );
}

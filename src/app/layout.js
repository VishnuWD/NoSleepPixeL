import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NS Pixel - Creative Web Design & Development Solutions",
  description: "Unleash your website's potential with NoSleepPixel's creative collective. Explore our services in web design, e-commerce, personal websites, and more.",
  keywords: "NoSleepPixel, web design, front-end solutions, responsive design, e-commerce, personal websites, business ads, digital experiences, creative collective, web development, user-friendly websites, digital services, website support, mobile-friendly websites, no sleep pixel",
  canonical: "https://www.nosleeppixel.online/",
  author: "NoSleepPixel Team",
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
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header/>
        {children}</body>
    </html>
  );
}

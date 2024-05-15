import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NS Pixel - Creative Web Design Team",
  description: "NoSleepPixel: Unleash your website's potential with our creative collective. We specialize in eye-catching web design and responsive front-end solutions. Our team of experts is dedicated to creating user-friendly, aesthetically pleasing websites that cater to all your digital needs. Whether it's an e-commerce platform, a personal blog, or a business advertisement, we have the skills and experience to bring your vision to life. Our services include website design, development, maintenance, and support. We focus on delivering high-quality, mobile-friendly websites that ensure a seamless experience across all devices. Partner with NoSleepPixel for innovative web solutions and exceptional digital experiences.",
  keywords: "NoSleepPixel, web design, front-end solutions, responsive design, e-commerce, personal websites, business ads, digital experiences, creative collective, web development, user-friendly websites, digital services, website support, mobile-friendly websites, no sleep pixel",
  canonical: "https://www.nosleeppixel.com/",
  author: "NoSleepPixel Team",
  alternates: {
    canonical: "https://www.nosleeppixel.online/",
  },
  openGraph: {
    title: 'NoSleepPixel | Creative Web Design & Development Solutionsg',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

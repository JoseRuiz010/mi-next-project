import Link from "next/link";
import NavBar from "../components/NavBar";
import { Roboto } from 'next/font/google';
import './globals.css'


export const metadata = {
  title: "Mi tienda con Next.js",
  description: "Generated by Next.js",
};
const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import Head from "next/head";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Ahmed Almouna",
  "aria-description": "Ahmed Almouna Personal Portfolio Website",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dotted">
      <Head>
        <meta {...metadata}></meta>
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

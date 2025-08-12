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
        <title>{metadata.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png"/>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata["aria-description"]} />
        <meta name="keywords" content="Ahmed Almouna, Portfolio, Software Engineer, Web Developer" />
        <meta name="author" content="Ahmed Almouna" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

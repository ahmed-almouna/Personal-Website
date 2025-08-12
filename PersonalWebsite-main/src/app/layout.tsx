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
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata["aria-description"]} />
        <meta name="keywords" content="Ahmed Almouna, Portfolio, Software Engineer, Web Developer" />
        <meta name="author" content="Ahmed Almouna" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

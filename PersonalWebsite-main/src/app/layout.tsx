import Head from "next/head";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Ahmed Almouna",
  description: "Ahmed Almouna Personal Portfolio Website",
  keywords: "Ahmed Almouna, Portfolio, Software Engineer, Software Developer, Web Developer, ahmed almouna," +
  "ahmed almoune, ahmed elmouna, ahmed elmoune, ahmed al mouna, ahmed al moune, ahmed el mouna, ahmed el moune," +
  "ahmed almona, ahmed almone, ahmed elmona, ahmed elmone, ahmed al mona, ahmed al mone, ahmed el mona, ahmed el mone," +
  "ahmad almouna, ahmad almoune, ahmad elmouna, ahmad elmoune, ahmad al mouna, ahmad al moune, ahmad el mouna," +
  "ahmad el moune, ahmad almona, ahmad almone, ahmad elmona, ahmad elmone, ahmad al mona, ahmad al mone, ahmad el mona," +
  "ahmad el mone",
  author: "Ahmed Almouna",
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
        <link rel="apple-touch-icon" sizes="180x180" href="https://ahmed-almouna.com/apple-touch-icon.png"/>
        <link rel="icon" href="https://ahmed-almouna.com/favicon.png"/>
        <link rel="icon" href="https://ahmed-almouna.com/favicon-32x32.png" sizes="32x32" type="image/png"/>
        <link rel="icon" href="https://ahmed-almouna.com/favicon-16x16.png" sizes="16x16" type="image/png"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

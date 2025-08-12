"use client";
import About from "@/components/About";
import Body from "@/components/Body";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Icons from "@/components/Icons";
import Projects from "@/components/Projects";
import "./globals.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

const Sections: JSX.Element[] = [
  <Body />,
  <About />,
  <Experience />,
  <Projects />,
  <Contact />,
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {Sections.map((section: JSX.Element, index: number) => {
        return (
          <div className="flex justify-center h-fit relative pb-10">
            <div className="w-full px-5 lg:w-11/12 lg:px-20 ">
              {section}
            </div>
            {/* {index !== Sections.length - 1 ? (
              <div
                className="absolute bottom-5 flex justify-center hover:cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * (index + 1), // Scroll down to the next full page
                    behavior: "smooth", // Smooth scrolling effect
                  });
                }}
              >
                <ArrowDownwardIcon className="relative hover:animate-bouncing" />
              </div>
            ) : (
              <></>
            )} */}
          </div>
        );
      })}
      <Icons />
    </div>
  );
}

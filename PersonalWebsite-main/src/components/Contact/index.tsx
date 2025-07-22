import { ChevronRight } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-full flex justify-center flex-col" id="contact">
      <div className="flex justify-center items-center text-5xl font-semibold uppercase mb-10">
        Get In Touch
      </div>
      <div className="flex justify-center items-center">
        <div className="w-11/12 md:w-5/12 text-center text-2xl font-extralight">
          I'm always free to discuss project ideas, potential new opportunities, 
          questions about my experience, or just say hello! 
          <br />
          <br />
          I&apos;m currently still looking for any
          internship/Co-op opportunities for Fall 2025.
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          href={"mailto:adm.moune2@gmail.com?subject=Hello"}
          target="_blank"
          className="py-4 px-6 bg-secondary rounded-xl text-white font-bold text-2xl shadow-md transition duration-100 ease-linear hover:scale-110 mt-5"
        >
          Contact <ChevronRight />
        </Link>
      </div>
      <div className="flex justify-center">
        <p className="text-xs absolute bottom-5">
            {/*  */}
        </p>
      </div>
    </div>
  );
}

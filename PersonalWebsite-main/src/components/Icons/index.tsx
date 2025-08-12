import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Icons() {
  return (
    <>
      
      <div className="flex justify-center pt-0 -mt-3 pb-2 mb-10 md:hidden">
        <div className="flex gap-6">
          <Link href={"https://github.com/ahmed-almouna"} target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={"https://www.linkedin.com/in/ahmed-almouna"} target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href={"mailto:adm.moune2@gmail.com?subject=Hello"} target="_blank">
            <EmailIcon />
          </Link>
        </div>
      </div>

      
      <div className="hidden md:block md:fixed md:left-16 lg:left-24 xl:left-32 2xl:left-40 md:bottom-6 z-50">
        <div className="flex md:gap-2 lg:gap-3 xl:gap-4">
          <Link href={"https://github.com/ahmed-almouna"} target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={"https://www.linkedin.com/in/ahmed-almouna"} target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href={"mailto:adm.moune2@gmail.com?subject=Hello"} target="_blank">
            <EmailIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

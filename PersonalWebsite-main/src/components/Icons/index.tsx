import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Icons() {
  return (
    <div className="hidden md:inline md:fixed left-[1/24] bottom-6">
      <div className="flex md:gap-2 lg:gap-3 xl:gap-4">
        <Link href={"https://github.com/ahmed-almouna"} target="_blank">
          <GitHubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ahmed-almouna"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href={"mailto:adm.moune2@gmail.com?subject=Hello"}
          target="_blank"
        >
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
}

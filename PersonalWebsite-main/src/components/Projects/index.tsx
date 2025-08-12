import { projectProps } from "@/common/types";
import { ProjectList } from "@/utils/constants";
import Link from "next/link";
import SkillBox from "./SkillBox";

export default function Projects() {
  return (
    <div className="flex flex-col" id="projects">
      <div className="text-5xl flex justify-center font-semibold uppercase mb-10 md:mb-16">
        Projects
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap gap-5 w-11/12 md:w-10/12 lg:w-3/4">
          {ProjectList.map((projectEntry: projectProps) => {
            return (
              <div
                key={projectEntry.name}
                className="border-secondary hover:bg-gray-200 border-4 rounded-2xl mb-3 h-fit basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Link href={projectEntry.url} className="" target="_blank">
                  <div className="p-8">
                    <div className="text-xl md:text-2xl font-semibold ">
                      {projectEntry.name}
                    </div>
                    <div className="mb-2 text-sm md:text-base">
                      {projectEntry.timeline}
                    </div>
                    <div className="text-[12px] xl:text-sm">
                      {projectEntry.text}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {projectEntry.skills.map((skill: string) => {
                        return SkillBox(skill);
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

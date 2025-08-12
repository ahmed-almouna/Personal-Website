"use client";
import { experienceProps } from "@/common/types";
import { ExperienceList } from "@/utils/constants";
import { useState } from "react";

export default function Experience() {
  const [company, setCompany] = useState<string>(ExperienceList[0].company);
  const handleCompanyClick = (newCompany: string) => {
    setCompany(newCompany);
  };
  const handleCompanyHyperlinkClick = (url: string) => {
    window.open(url, "_target");
  };
  return (
    <div className="h-full" id="work">
      <div className="text-5xl font-bold uppercase flex justify-center">
        Experience
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch mt-10 md:mt-20">
        <div className="flex flex-col items-center gap-y-6 md:gap-y-8">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            return (
              <div key={experienceEntry.company} className="text-2xl md:text-3xl">
                <div
                  className={`${
                    experienceEntry.company === company
                      ? "text-secondary font-semibold underline"
                      : ""
                  } cursor-pointer hover:text-secondary`}
                  onClick={() => handleCompanyClick(experienceEntry.company)}
                >
                  {experienceEntry.company}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block w-0.5 bg-black md:h-[550px] self-stretch" />
        <div className="w-full md:w-1/4 max-w-sm md:max-w-none mx-auto md:mx-0 px-4 md:px-0 flex gap-y-6 md:gap-y-8">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            if (experienceEntry.company === company) {
              return (
                <div
                  key={experienceEntry.company}
                  className=" flex flex-col gap-4 break-words"
                >
                  <div className="text-xl md:text-3xl font-semibold md:w-max">
                    {experienceEntry.role}{" "}
                    <span
                      className="text-secondary hover:cursor-pointer"
                      onClick={() =>
                        handleCompanyHyperlinkClick(experienceEntry.url)
                      }
                    >
                      @ {experienceEntry.company}
                    </span>
                  </div>
                  <div className="text-secondary text-base md:text-xl font-semibold">
                    {experienceEntry.timeline}
                  </div>
                  {experienceEntry.bullets.map((bullet: string) => {
                    return (
                      <li
                        key={bullet}
                        className="marker:text-secondary text-sm md:text-lg"
                      >
                        {bullet}
                      </li>
                    );
                  })}
                  {experienceEntry.location && (
                    <div className="text-gray-600 mt-4">
                      📍{experienceEntry.location}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

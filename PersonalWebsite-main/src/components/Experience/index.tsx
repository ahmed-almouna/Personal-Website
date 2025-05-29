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
      <div className="flex gap-10 justify-center items-stretch mt-20 h-1/2">
        <div className="flex flex-col items-center gap-y-8">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            return (
              <div key={experienceEntry.company} className="text-3xl">
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
        <div className="w-0.5 bg-black h-[550px] " />
        <div className="w-1/4 flex gap-y-8">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            if (experienceEntry.company === company) {
              return (
                <div
                  key={experienceEntry.company}
                  className=" flex flex-col gap-4"
                >
                  <div className="text-3xl font-semibold w-max">
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
                  <div className="text-secondary text-xl font-semibold">
                    {experienceEntry.timeline}
                  </div>
                  {experienceEntry.bullets.map((bullet: string) => {
                    return (
                      <li
                        key={bullet}
                        className="marker:text-secondary text-lg"
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

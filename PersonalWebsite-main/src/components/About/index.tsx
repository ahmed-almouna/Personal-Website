"use client";
import { aboutProps } from "@/common/types";
import { AboutList } from "@/utils/constants";
import { useState } from "react";

export default function About() {
  const [topic, setTopic] = useState<string>(AboutList[0].topic);
  
  const handleTopicClick = (newTopic: string) => {
    setTopic(newTopic);
  };
  
  return (
    <div className="flex flex-col items-center mb-6 md:mb-24" id="about">
      <div className="text-5xl font-bold uppercase mb-10 md:mb-20">
        About
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-end items-start gap-4 md:gap-0 px-4">
        {/* Left side - Topic list */}
        <div className="w-full md:w-1/3 flex flex-row flex-nowrap md:flex-wrap gap-4 justify-center md:justify-center mt-2 md:mt-20 overflow-x-auto no-scrollbar">
          {AboutList.map((aboutEntry: aboutProps) => (
            <div
              key={aboutEntry.topic}
              className={`px-0 py-0 md:px-6 md:py-3 md:rounded-lg transition-all duration-300 ${
                aboutEntry.topic === topic
                  ? "text-secondary underline md:no-underline md:bg-secondary md:text-white md:shadow-lg md:scale-105"
                  : "text-gray-700 underline hover:text-secondary md:no-underline md:bg-gray-100 md:hover:bg-gray-200"
              } cursor-pointer text-lg md:text-base whitespace-nowrap`}
              onClick={() => handleTopicClick(aboutEntry.topic)}
            >
              <span className="font-medium md:text-xl">{aboutEntry.topic}</span>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-3xl w-full">
          <div className="h-auto md:h-[200px] ">
            {AboutList.map((aboutEntry: aboutProps) => {
              if (aboutEntry.topic === topic) {
                return (
                  <div key={aboutEntry.topic} className="space-y-6 p-6 bg-white rounded-lg shadow-lg">
                    {aboutEntry.role && (
                      <div className="text-2xl font-semibold">
                        {aboutEntry.role}
                      </div>
                    )}
                    
                    <div className="space-y-5 md:hidden">
                      {((aboutEntry as any).mobileBullets ?? aboutEntry.bullets).map((text: string, index: number) => (
                        <p key={index} className="text-gray-700 leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                    
                    <div className="space-y-5 hidden md:block">
                      {aboutEntry.bullets.map((text: string, index: number) => (
                        <p key={index} className="text-gray-700 leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

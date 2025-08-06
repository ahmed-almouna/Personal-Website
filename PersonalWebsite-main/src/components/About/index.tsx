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
    <div className="flex flex-col items-center mb-32" id="about">
      <div className="text-5xl font-bold uppercase mb-20">
        About
      </div>
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-end items-start gap-0 px-4">
        {/* Left side - Topic list */}
        <div className="w-full md:w-1/3 flex flex-row flex-wrap gap-4 justify-center mt-20">
          {AboutList.map((aboutEntry: aboutProps) => (
            <div
              key={aboutEntry.topic}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                aboutEntry.topic === topic
                  ? "bg-secondary text-white shadow-lg scale-105"
                  : "bg-gray-100 hover:bg-gray-200"
              } cursor-pointer`}
              onClick={() => handleTopicClick(aboutEntry.topic)}
            >
              <span className="text-xl font-medium">{aboutEntry.topic}</span>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-3xl w-full">
          <div className="h-[200px] ">
            {AboutList.map((aboutEntry: aboutProps) => {
              if (aboutEntry.topic === topic) {
                return (
                  <div key={aboutEntry.topic} className="space-y-6 p-6 bg-white rounded-lg shadow-lg">
                    {aboutEntry.role && (
                      <div className="text-2xl font-semibold">
                        {aboutEntry.role}
                      </div>
                    )}
                    <div className="space-y-5">
                      {aboutEntry.bullets.map((text: string, index: number) => (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed"
                        >
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

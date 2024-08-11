import React from "react";
import { experienceListApp } from "@/lib/utils";

const ExperienceApp = () => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 pb-2 border-gray-300 dark:border-gray-700">
          Professional Experience
        </h2>
        {experienceListApp.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <div className="flex flex-wrap justify-between items-center mb-3">
                <div className="flex flex-wrap gap-3 items-center">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {item.designation}
                  </h3>
                  <span className="text-blue-600 hover:underline">
                    {item.company}
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="text-gray-600 dark:text-gray-400 text-base font-bold">
                    {item.address}
                  </span>{" "}
                  {" , "} {item.duration}
                </span>
              </div>

              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                {item.description.map((desc, newIndex) => {
                  return <li key={newIndex}>{desc}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ExperienceApp;

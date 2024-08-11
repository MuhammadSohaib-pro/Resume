import React from "react";
import { projectListApp } from "@/lib/utils";

const ProjectApp = () => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 pb-2 border-gray-300 dark:border-gray-700">
          Projects
        </h2>
        {projectListApp.map((item, index) => {
          return (
            <div key={index} className="mt-4">
              <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300 pt-2">
                {item.description}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                {item.details.map((detail, newIndex) => {
                  return <li key={newIndex}>{detail}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProjectApp;

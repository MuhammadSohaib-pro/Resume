import React from "react";
import Link from "next/link";
import { experienceList } from "@/lib/utils";

const Experience = () => {

  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 pb-2 border-gray-300 dark:border-gray-700">
          Professional Experience
        </h2>
        {experienceList.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <div className="flex flex-wrap justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {item.designation}
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  <span className="text-gray-600 dark:text-gray-400 text-base font-bold">
                    {item.address}
                  </span>{" "}
                  {" , "} {item.duration}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                <Link href={item.companyWebsite}>
                  <p className="text-blue-600 hover:underline">
                    {item.company}
                  </p>
                </Link>
              </p>
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

export default Experience;

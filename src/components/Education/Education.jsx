import React from "react";

const Education = () => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b-2 pb-2 border-gray-300 dark:border-gray-700">
          Education
        </h2>
        <div>
          <div className="flex flex-wrap justify-between items-center">
            <h3 className="text-xl sm:text-2xl font-bold">
              BSc Computer Science
            </h3>
            <span className="text-gray-600 dark:text-gray-400">
              September 2019 - June 2023
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Arid Agriculture University Rawalpindi
          </p>
        </div>
      </section>
    </>
  );
};

export default Education;

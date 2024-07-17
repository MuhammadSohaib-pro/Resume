import React from "react";
import ToggleTheme from "@/components/Theme/ToggleTheme";
import Header from "@/components/Header/Header";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";

const Resume = () => {
  return (
    <>
      <div className="min-h-screen p-4 sm:p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <ToggleTheme />
        <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <Header />
          <Profile />
          <Skills />
          <Experience />
          <Education />
          <Project />
        </div>
      </div>
    </>
  );
};

export default Resume;

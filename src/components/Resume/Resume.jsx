"use client";
import React, { useState } from "react";
import ToggleTheme from "@/components/Theme/ToggleTheme";
import ToggleAppWeb from "@/components/Toggle/ToggleAppWeb";
import Header from "@/components/Header/Header";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";
import ProfileApp from "@/components/Profile/ProfileApp";
import SkillsApp from "@/components/Skills/SkillsApp";
import ExperienceApp from "@/components/Experience/ExperienceApp";
import ProjectApp from "@/components/Project/ProjectApp";

const Resume = () => {
  const [isAppMode, setIsAppMode] = useState(false);

  const handleToggleAppWeb = (mode) => {
    setIsAppMode(mode);
  };
  return (
    <>
      <div className="min-h-screen p-4 sm:p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <ToggleTheme />
        <ToggleAppWeb onToggle={handleToggleAppWeb} />
        {isAppMode ? (
          <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
            <Header />
            <Profile />
            <Skills />
            <Experience />
            <Education />
            <Project />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
            <Header />
            <ProfileApp />
            <SkillsApp />
            <ExperienceApp />
            <Education />
            <ProjectApp />
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;

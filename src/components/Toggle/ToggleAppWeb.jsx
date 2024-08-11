"use client";
import React, { useState, useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ToggleAppWeb = ({ onToggle }) => {
  const [isAppMode, setIsAppMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setIsAppMode(savedMode === "web");
      if (savedMode === "web") {
        document.documentElement.classList.add("web-mode");
      }
      onToggle(savedMode);
    }
  }, []);

  const toggleMode = () => {
    setIsAppMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? "app" : "web");
      if (newMode) {
        document.documentElement.classList.add("app-mode");
        document.documentElement.classList.remove("web-mode");
      } else {
        document.documentElement.classList.add("web-mode");
        document.documentElement.classList.remove("app-mode");
      }
      onToggle(newMode);
      return newMode;
    });
  };

  return (
    <>
      <div className="absolute top-4 left-4">
        <label className="inline-flex items-center relative">
          <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            checked={isAppMode}
            onChange={toggleMode}
          />
          <div className="relative w-[60px] h-[30px] sm:w-[110px] sm:h-[50px] bg-white peer-checked:bg-blue-500 rounded-full after:absolute after:content-[''] after:w-[25px] sm:after:w-[40px] after:h-[25px] sm:after:h-[40px] after:bg-gradient-to-r from-green-500 to-blue-400 peer-checked:after:from-blue-900 peer-checked:after:to-blue-900 after:rounded-full after:top-[2.5px] sm:after:top-[5px] after:left-[2.5px] sm:after:left-[5px] active:after:w-[30px] sm:active:after:w-[50px] peer-checked:after:left-[55px] sm:peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
          <FaMobileAlt className="absolute left-[8px] sm:left-[13px] w-4 h-4 sm:w-6 sm:h-6 fill-white peer-checked:fill-black" />
          <CgWebsite className="absolute right-[8px] sm:right-[13px] w-4 h-4 sm:w-6 sm:h-6 text-black opacity-60 peer-checked:opacity-70 peer-checked:text-white" />
        </label>
      </div>
    </>
  );
};

export default ToggleAppWeb;

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
          Muhammad Sohaib
        </h1>
        <p className="text-xl sm:text-2xl mt-2 text-gray-600 dark:text-gray-300">
          Software Engineer
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          <Link href="tel:+92-306-0088-896">
            <p className="text-blue-600 flex items-center space-x-2 hover:underline break-all">
              <FaPhoneAlt />
              <span>+92-306-0088 896</span>
            </p>
          </Link>
          <Link href="mailto:muhammadsohaib030@gmail.com">
            <p className="text-blue-600 flex items-center space-x-2 hover:underline break-all">
              <FaEnvelope />
              <span>muhammadsohaib030@gmail.com</span>
            </p>
          </Link>
          <Link href="https://maps.app.goo.gl/YpDDEBccfRaqT1YM8">
            <p className="text-blue-600 flex items-center space-x-2 hover:underline break-all">
              <IoIosPin />
              <span>Islamabad, PK</span>
            </p>
          </Link>
        </div>

        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://www.linkedin.com/in/muhammad-sohaib-pro/">
            <p className="text-blue-600 flex items-center space-x-2 hover:underline">
              <FaLinkedin />
              <span>LinkedIn</span>
            </p>
          </Link>
          <Link href="https://github.com/MuhammadSohaib-pro">
            <p className="text-blue-600 flex items-center space-x-2 hover:underline">
              <FaGithub />
              <span>GitHub</span>
            </p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

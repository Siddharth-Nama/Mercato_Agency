"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToSEO: () => void;
  scrollToGraphicDesign: () => void;
  scrollTOThumbnailDesign: () => void;
  scrollTOContentCreation: () => void;
  scrollTOAdRunning: () => void;
  scrollToVideoEditing: () => void;
  scrollToProductPhotography: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToSEO,
  scrollToGraphicDesign,
  scrollTOThumbnailDesign,
  scrollTOContentCreation,
  scrollTOAdRunning,
  scrollToVideoEditing,
  scrollToProductPhotography,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };
  const [isPlatformVisible, setIsPlatformVisible] = useState(false);
  const [isAiSolutionsVisible, setIsAiSolutionsVisible] = useState(false);

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer " href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50"
        >
          {/* Platform Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsPlatformVisible(true)}
            onMouseLeave={() => setIsPlatformVisible(false)}
          >
            <div
              className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50"
            >
              Platform
            </div>
            {isPlatformVisible && (
              <div className="absolute top-full left-0 mt-2 w-[600px] p-6 bg-black shadow-lg rounded-lg z-50 grid grid-cols-2 gap-6 text-sm text-white">
                <a
                  href="https://algochurn.com"
                  className=" flex flex-col space-y-1 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <img
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    alt="Agent Studio"
                    className="w-full rounded"
                  />
                  <div className="font-semibold">Agent Studio</div>
                  <p className="text-xs text-gray-400">
                    Prepare for tech interviews like never before.
                  </p>
                </a>
                <a
                  href="https://tailwindmasterkit.com"
                  className="flex flex-col space-y-1 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <img
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    alt="Autonomous Engine"
                    className="w-full rounded"
                  />
                  <div className="font-semibold">Autonomous Engine</div>
                  <p className="text-xs text-gray-400">
                    Production ready Tailwind css components for your next
                    project
                  </p>
                </a>
                <a
                  href="https://gomoonbeam.com"
                  className="flex flex-col space-y-1 hover:text-blue-400 transition-colors"
                  target="_blank"
                >
                  <img
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    alt="Knowledge Base"
                    className="w-full rounded"
                  />
                  <div className="font-semibold">Knowledge Base</div>
                  <p className="text-xs text-gray-400">
                    Never write from scratch again. Go from idea to blog in
                    minutes.
                  </p>
                </a>
              </div>
            )}
          </div>

          {/* Ai Solutions Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsAiSolutionsVisible(true)}
            onMouseLeave={() => setIsAiSolutionsVisible(false)}
          >
            <div
              className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50"
            >
              Ai Solutions
            </div>
            {isAiSolutionsVisible && (
              <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-black shadow-lg rounded-lg z-50 flex flex-col space-y-2 text-sm">
                <Link
                  href="/allagents"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  All Agents
                </Link>
                <Link
                  href="/web-dev"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  General Problem Solver
                </Link>
                <Link
                  href="/interface-design"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  Data Extractor
                </Link>
                <Link
                  href="/seo"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  Customer Service
                </Link>
                <Link
                  href="/seo"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  E-Commerce
                </Link>
                <Link
                  href="/seo"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  Sales
                </Link>
                <Link
                  href="/seo"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  Finance & Accounting
                </Link>
                <Link
                  href="/seo"
                  className="cursor-pointer hidden 
    md:flex space-x-10 items-center
    text-slate-300 text-center 
    bg-clip-text text-transparent 
    bg-gradient-to-b from-neutral-50
    to bg-neutral-400 bg-opacity-50 hover:text-blue-600 transition-colors"
                >
                  Human Resources
                </Link>
                
              </div>
            )}
          </div>

          {/* Static Link */}
          <Link className="cursor-pointer" href="/about">
            About
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Book a meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

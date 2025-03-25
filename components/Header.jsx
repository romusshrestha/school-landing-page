import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl font-bold">Logo</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Programs
          </Link>
          <Link
            href="#events"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>   
    </header>
  );
}

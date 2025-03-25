import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-100">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-start md:justify-items-center">
          <div className="space-y-4 flex flex-col  justify-start">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xl font-bold">Logo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering minds and shaping futures since 1995.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <LuFacebook />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <SiInstagram />
              </Link>
            </div>
          </div>

          <div className="space-y-4 flex flex-col justify-start">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col justify-start">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} School Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

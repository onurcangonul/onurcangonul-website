import React from "react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaReact className="animate-slow-spin text-primary" size={32} />
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center text-sm font-medium text-primary gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/onurcangonul/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/onurcangonul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/onurcangonul/onurcangonul-website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Source Code
              </a>
            </li>
            <li>
              <a href="mailto:onurcangonul@gmail.com" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Email */}
          <a
            href="mailto:onurcangonul@gmail.com"
            className="text-sm font-medium text-primary hover:underline"
          >
            onurcangonul@gmail.com
          </a>
        </div>

        {/* Divider */}
        <hr className="my-6 border-border" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-primary space-y-2">
          <p>
            © 2025 <span className="hover:underline">This Website</span>. Developed By{" "}
            <Link
              href="https://www.linkedin.com/in/onurcangonul/"
              className="hover:underline"
              target="_blank"
            >
              Onurcan Gönül
            </Link>
          </p>
          <p>
            Powered by <strong>Next.js 15</strong> and <strong>React 19</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

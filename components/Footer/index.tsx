import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { informationText } from "@/data/information/informationData";
const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <FaReact className="animate-slow-spin text-primary" size={32} />
          </div>

          <ul className="flex flex-wrap items-center text-sm font-medium text-primary gap-4">
            <li>
              <Link
                href={`${informationText.linkedin ?? ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href={`${informationText.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/onurcangonul/onurcangonul-website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Source Code
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${informationText.email ?? ""}`}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href={`mailto:${informationText.email ?? ""}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            {informationText.email ?? ""}
          </a>
        </div>

        <hr className="my-6 border-border" />

        <div className="text-center text-sm text-primary space-y-2">
          <p>
            © 2025 <span className="hover:underline">This Website</span>.
            Developed By{" "}
            <Link
              href={`${informationText.linkedin ?? ""}`}
              className="hover:underline"
              target="_blank"
            >
              {informationText.fullName??""}
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

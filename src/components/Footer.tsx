"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Mario Guerra</h2>
            <p className="text-sm text-foreground/80">
              Frontend developer specializing in creating beautiful, 
              performant, and accessible user interfaces.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Links</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-foreground/80 hover:text-primary">
                Home
              </Link>
              <Link href="/projects" className="text-sm text-foreground/80 hover:text-primary">
                Projects
              </Link>
              <Link href="/resume" className="text-sm text-foreground/80 hover:text-primary">
                Resume
              </Link>
              <Link href="/blog" className="text-sm text-foreground/80 hover:text-primary">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Connect</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-foreground/80 hover:text-primary"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-foreground/60">
          <p>© {currentYear} Mario Guerra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

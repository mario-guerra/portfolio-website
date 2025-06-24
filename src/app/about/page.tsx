// filepath: /Users/mariog/portfolio_website/portfolio-website/src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiFileText, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import avatarImage from "../../../public/images/avatars/Mario_Guerra_avatar.png";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A passionate full-stack developer with a love for creating elegant, user-friendly applications.
                </p>
              </div>
              <div className="max-w-[600px] space-y-4 text-foreground/90">
                <p>
                  Hello! I'm Mario Guerra, a full-stack developer based in San Francisco, CA. I have a passion for building
                  digital experiences that are both functional and beautiful.
                </p>
                <p>
                  With over 5 years of experience in web development, I've worked on a variety of projects from small
                  business websites to large-scale enterprise applications. I'm proficient in modern front-end frameworks
                  like React and Next.js, as well as back-end technologies like Node.js and Express.
                </p>
                <p>
                  When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting
                  with new cooking recipes.
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/mario-guerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/mario-guerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/_marioguerra_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-muted"
                  aria-label="Twitter"
                >
                  <FiTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-primary bg-background/50 p-2">
                <Image
                  src={avatarImage}
                  alt="Mario Guerra"
                  width={400}
                  height={400}
                  className="aspect-square rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills & Expertise</h2>
              <p className="mt-2 text-muted-foreground">
                Here are some of the technologies and skills I've been working with
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "CSS/SCSS", "Tailwind CSS", "Redux"].map((skill) => (
                    <div key={skill} className="rounded-md bg-card p-3 text-center text-sm shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Backend Development</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Firebase", "AWS"].map((skill) => (
                    <div key={skill} className="rounded-md bg-card p-3 text-center text-sm shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tools & Others</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {["Git", "GitHub", "Docker", "CI/CD", "Webpack", "Jest", "Figma", "Responsive Design"].map((skill) => (
                    <div key={skill} className="rounded-md bg-card p-3 text-center text-sm shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Experience</h2>
              <p className="mt-2 text-muted-foreground">
                My professional journey so far
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="relative border-l border-border pl-6">
                <div className="absolute -left-[7px] top-[5px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                    <span className="text-sm text-muted-foreground">2021 - Present</span>
                  </div>
                  <p className="text-base font-medium">TechCorp Inc.</p>
                  <p className="text-sm text-muted-foreground">
                    Lead the development of the company's flagship product using React and TypeScript.
                    Implemented state management with Redux and integrated with backend APIs.
                    Mentored junior developers and conducted code reviews.
                  </p>
                </div>
              </div>
              
              <div className="relative border-l border-border pl-6">
                <div className="absolute -left-[7px] top-[5px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                    <span className="text-sm text-muted-foreground">2018 - 2021</span>
                  </div>
                  <p className="text-base font-medium">WebSolutions LLC</p>
                  <p className="text-sm text-muted-foreground">
                    Developed and maintained various client websites and web applications.
                    Worked with React, Node.js, and MongoDB to build full-stack applications.
                    Collaborated with designers to implement responsive UI designs.
                  </p>
                </div>
              </div>
              
              <div className="relative border-l border-border pl-6">
                <div className="absolute -left-[7px] top-[5px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Junior Web Developer</h3>
                    <span className="text-sm text-muted-foreground">2016 - 2018</span>
                  </div>
                  <p className="text-base font-medium">Digital Agency Co.</p>
                  <p className="text-sm text-muted-foreground">
                    Built responsive websites for various clients using HTML, CSS, and JavaScript.
                    Worked with WordPress and custom PHP solutions.
                    Assisted senior developers with larger projects and learned modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Education</h2>
              <p className="mt-2 text-muted-foreground">
                My academic background
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="relative border-l border-border pl-6">
                <div className="absolute -left-[7px] top-[5px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
                    <span className="text-sm text-muted-foreground">2012 - 2016</span>
                  </div>
                  <p className="text-base font-medium">University of Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Graduated with honors. Specialized in web development and software engineering.
                    Participated in various hackathons and coding competitions.
                  </p>
                </div>
              </div>
              
              <div className="relative border-l border-border pl-6">
                <div className="absolute -left-[7px] top-[5px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Various Online Courses</h3>
                    <span className="text-sm text-muted-foreground">2016 - Present</span>
                  </div>
                  <p className="text-base font-medium">Udemy, Coursera, Frontend Masters</p>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning and improving my skills through online courses.
                    Completed certifications in React, Node.js, TypeScript, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Want to know more?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Check out my resume for a more detailed overview of my experience and skills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/resume"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Resume
                <FiFileText className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

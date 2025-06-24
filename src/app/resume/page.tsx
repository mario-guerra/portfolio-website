import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export default function Resume() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center space-y-2 text-center sm:flex-row sm:justify-between sm:space-y-0 sm:text-left">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      John Doe
                    </h1>
                    <p className="text-foreground/80">Frontend Developer</p>
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <FiDownload className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiMail className="mr-1 h-4 w-4" />
                    <a href="mailto:john.doe@example.com" className="hover:text-primary">
                      john.doe@example.com
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiPhone className="mr-1 h-4 w-4" />
                    <a href="tel:+11234567890" className="hover:text-primary">
                      +1 (123) 456-7890
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiGithub className="mr-1 h-4 w-4" />
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiLinkedin className="mr-1 h-4 w-4" />
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Summary */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Summary</h2>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-foreground/80">
                    Frontend developer with 5+ years of experience building responsive, accessible, 
                    and performant web applications. Specializing in React, Next.js, and TypeScript 
                    with a strong focus on user experience and modern design patterns.
                  </p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Technical Skills</h3>
                    <ul className="mt-2 space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>JavaScript / TypeScript / React / Next.js</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>HTML5 / CSS3 / Tailwind CSS / SASS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Redux / Context API / React Query</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>REST API / GraphQL / Node.js</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Git / GitHub / CI/CD / Jest / Testing Library</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Soft Skills</h3>
                    <ul className="mt-2 space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Problem Solving / Critical Thinking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Communication / Collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Time Management / Organization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Adaptability / Continuous Learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Attention to Detail / User-Centered Design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Work Experience</h2>
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                        <p className="text-foreground/80">TechCorp Inc.</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>Jan 2021 - Present</p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Led frontend development for an enterprise SaaS platform serving 100,000+ users,
                          resulting in a 40% improvement in load times and 25% increase in user engagement.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Implemented comprehensive UI component library using React and TypeScript, reducing
                          development time for new features by 30%.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Mentored junior developers through code reviews, pair programming, and leading
                          technical workshops on React best practices.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Collaborated with UX/UI designers to implement accessible components following
                          WCAG 2.1 standards, increasing accessibility score from 70% to 98%.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Job 2 */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Frontend Developer</h3>
                        <p className="text-foreground/80">WebSolutions Agency</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>June 2018 - Dec 2020</p>
                        <p>Boston, MA</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Developed responsive web applications for 15+ clients across e-commerce, finance,
                          and healthcare sectors using React, Redux, and SASS.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Implemented performance optimizations that reduced load times by 60% and improved
                          Google Lighthouse scores from an average of 65 to 90.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Created and maintained automated testing suites using Jest and React Testing Library,
                          achieving 85% code coverage across all projects.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Education</h2>
                <div className="space-y-6">
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Master of Computer Science</h3>
                        <p className="text-foreground/80">Tech University</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>2016 - 2018</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Specialized in Human-Computer Interaction and Web Technologies
                    </p>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                        <p className="text-foreground/80">State University</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>2012 - 2016</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Graduated with honors. Focused on software development and web technologies.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Certifications</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">AWS Certified Developer</h3>
                    <p className="text-sm text-foreground/70">Amazon Web Services • 2023</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">Professional Scrum Master I</h3>
                    <p className="text-sm text-foreground/70">Scrum.org • 2022</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">Google UX Design Certificate</h3>
                    <p className="text-sm text-foreground/70">Google • 2021</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">React.js Certification</h3>
                    <p className="text-sm text-foreground/70">Meta • 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

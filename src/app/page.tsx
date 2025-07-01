import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import avatarImage from "../../public/images/avatars/Mario_Guerra_avatar.png";

// Featured projects data
const featuredProjects = [
	{
		id: 1,
		title: "Modern Portfolio Website",
		description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, created entirely using AI pair programming with Cline + GPT-4.1 and GitHub Copilot + Claude 3.7.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown", "Responsive Design"],
		imageUrl: "/portfolio-website/images/avatars/Chad_Jipiti_Avatar.jpg",
		githubUrl: "https://github.com/mario-guerra/portfolio-website",
		liveUrl: "https://marioguerra.xyz/portfolio-website/",
	},
	{
		id: 2,
		title: "VibeSpec",
		description: "VibeSpec is an AI-powered assistant that helps you create API definitions using TypeSpec from natural language descriptions. It converts your service ideas into structured, well-documented TypeSpec definitions that are ready to implement.",
		tags: ["Azure OpenAI", "Azure Cognitive Services", "TypeSpec", "Python"],
		imageUrl: "/portfolio-website/images/blog/typespec-first-vibe-code-second-build-apis-that-last/TypeSpec_First_Vibe_Second.jpeg",
		githubUrl: "https://github.com/mario-guerra/vibespec",
		liveUrl: "/portfolio-website/blog/typespec-first-vibe-code-second-build-apis-that-last",
	},
	{
		id: 3,
		title: "AI-Powered Audio Translation Service",
		description: "A translation service that converts audio recordings between languages using Azure AI services, designed with TypeSpec as the blueprint and AI-assisted development.",
		tags: ["TypeSpec", "Azure Cognitive Services", "API Design", "AI-Assisted Development", "C#"],
		imageUrl: "/portfolio-website/images/blog/building-a-translation-service-with-typespec-and-ai-a-blueprint-approach/TypeSpec-AI-Translation-Service.jpeg",
		githubUrl: "https://github.com/mario-guerra/translation-service",
		liveUrl: "/portfolio-website/blog/building-a-translation-service-with-typespec-and-ai-a-blueprint-approach",
	},
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 animated-gradient bg-gradient-to-r from-primary/20 via-background to-secondary/20"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                  AI-Powered Tools & API Design for Enhanced Developer Experience
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Hi, I'm Mario Guerra. I specialize in creating AI-powered tools and processes that enhance developer experiences, helping teams ship high-quality APIs faster. By combining API design expertise with AI innovations, I make software development more intuitive, efficient, and reliable for teams of all sizes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  View Projects
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-primary bg-background/50 p-2">
                <Image
                  src={avatarImage}
                  alt="Mario Guerra"
                  width={500}
                  height={500}
                  className="aspect-square rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out some of my recent work and personal projects.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 space-y-4 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border p-4">
                  <Link 
                    href={project.githubUrl} 
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>Code</span>
                  </Link>
                  <Link 
                    href={project.liveUrl} 
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View All Projects
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Technologies and tools I specialize in
              </p>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {["TypeScript", "Python", "C#", "Next.js", "Tailwind CSS", "Azure OpenAI", "Azure Cognitive Services", "TypeSpec", "RAG", "API Design", "Semantic Kernel", "Microsoft Graph API", "NLP", "VS Code Extension", "Responsive Design", "Knowledge Mining", "AI-Assisted Development", "Document Processing"].map((skill) => (
                <div key={skill} className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                      <path d="m2 17 10 5 10-5" />
                      <path d="m2 12 10 5 10-5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium">{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border bg-muted/40 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Me
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
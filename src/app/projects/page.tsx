// filepath: /Users/mariog/portfolio_website/portfolio-website/src/app/projects/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiFilter, FiSearch } from "react-icons/fi";
import { useState } from "react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard with dark mode, authentication, and real-time analytics visualizations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "https://placehold.co/600x400/9333ea/ffffff?text=E-Commerce+Dashboard",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Travel Companion App",
    description: "Mobile-first web application for travelers to plan trips, save favorite locations, and share experiences.",
    tags: ["Next.js", "TailwindCSS", "MapBox API", "Prisma"],
    imageUrl: "https://placehold.co/600x400/4f46e5/ffffff?text=Travel+App",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Tool that leverages AI to help users create blog posts, social media content, and marketing copy.",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    imageUrl: "https://placehold.co/600x400/0ea5e9/ffffff?text=AI+Generator",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "Application for tracking expenses, creating budgets, and visualizing spending patterns.",
    tags: ["Vue.js", "Firebase", "D3.js", "TailwindCSS"],
    imageUrl: "https://placehold.co/600x400/22c55e/ffffff?text=Finance+App",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team permissions.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Task+App",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "Weather application with 5-day forecasts, location-based data, and interactive maps.",
    tags: ["JavaScript", "OpenWeather API", "Bootstrap", "Chart.js"],
    imageUrl: "https://placehold.co/600x400/0284c7/ffffff?text=Weather+App",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on search and tag filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              A collection of my work, side projects, and experiments
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <FiFilter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
              <select
                className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedTag || ""}
                onChange={(e) => setSelectedTag(e.target.value || null)}
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {project.featured && (
                    <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Featured
                    </div>
                  )}
                  <div className="flex-1 space-y-4 p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border p-4">
                    <a
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg font-medium">No projects found matching your criteria.</p>
                <p className="text-muted-foreground">Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border bg-muted/40 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in working together?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Web Applications with React",
    excerpt: "Learn how to create inclusive and accessible React applications using ARIA attributes, keyboard navigation, and semantic HTML.",
    date: "June 15, 2025",
    readTime: "8 min read",
    imageUrl: "https://placehold.co/800x450/9333ea/ffffff?text=Accessibility",
    category: "Development",
    slug: "building-accessible-web-applications",
    featured: true,
  },
  {
    id: 2,
    title: "State Management in 2025: Beyond Redux",
    excerpt: "Explore modern state management solutions for React applications and how they compare to traditional Redux patterns.",
    date: "May 28, 2025",
    readTime: "10 min read",
    imageUrl: "https://placehold.co/800x450/4f46e5/ffffff?text=State+Management",
    category: "React",
    slug: "state-management-beyond-redux",
    featured: true,
  },
  {
    id: 3,
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Practical strategies for improving load times, reducing bundle sizes, and enhancing user experience in Next.js applications.",
    date: "May 10, 2025",
    readTime: "12 min read",
    imageUrl: "https://placehold.co/800x450/0ea5e9/ffffff?text=Next.js+Performance",
    category: "Performance",
    slug: "optimizing-nextjs-applications",
    featured: false,
  },
  {
    id: 4,
    title: "CSS-in-JS vs. Utility-First CSS: Making the Right Choice",
    excerpt: "A comprehensive comparison of styling approaches and how to choose the best one for your project needs.",
    date: "April 22, 2025",
    readTime: "9 min read",
    imageUrl: "https://placehold.co/800x450/22c55e/ffffff?text=CSS+Approaches",
    category: "CSS",
    slug: "css-in-js-vs-utility-first",
    featured: false,
  },
  {
    id: 5,
    title: "Building a Design System from Scratch",
    excerpt: "A step-by-step guide to creating a comprehensive design system that scales with your application needs.",
    date: "April 05, 2025",
    readTime: "15 min read",
    imageUrl: "https://placehold.co/800x450/f97316/ffffff?text=Design+System",
    category: "Design",
    slug: "building-design-system-from-scratch",
    featured: false,
  },
  {
    id: 6,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Essential TypeScript patterns and practices to make your React codebase more maintainable and type-safe.",
    date: "March 18, 2025",
    readTime: "11 min read",
    imageUrl: "https://placehold.co/800x450/0284c7/ffffff?text=TypeScript",
    category: "TypeScript",
    slug: "typescript-best-practices-react",
    featured: false,
  },
];

export default function Blog() {
  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);
  // Regular posts
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Blog & Articles
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                  Thoughts, insights, and perspectives on web development, design, and technology.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                  href="#development"
                  className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Development
                </Link>
                <Link
                  href="#design"
                  className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Design
                </Link>
                <Link
                  href="#react"
                  className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  React
                </Link>
                <Link
                  href="#typescript"
                  className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  TypeScript
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-start gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                    Featured Articles
                  </h2>
                  <p className="max-w-[700px] text-foreground/80">
                    A selection of my most popular and insightful articles.
                  </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                  {featuredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={800}
                          height={450}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center gap-2 p-4">
                        <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </div>
                        <div className="flex items-center text-xs text-foreground/70">
                          <FiCalendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-xs text-foreground/70">
                          <FiClock className="mr-1 h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <h3 className="text-xl font-bold">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-foreground/80">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Read More
                          <FiArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* All Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Latest Articles
                </h2>
                <p className="max-w-[700px] text-foreground/80">
                  Browse all my articles on development, design, and technology.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center gap-2 pb-2">
                        <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </div>
                        <div className="flex items-center text-xs text-foreground/70">
                          <FiCalendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-2 flex-1 line-clamp-2 text-sm text-foreground/80">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-xs text-foreground/70">
                          <FiClock className="mr-1 inline-block h-3 w-3" />
                          {post.readTime}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Read More
                          <FiArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Subscribe to the Newsletter
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                  Get the latest articles and resources directly to your inbox.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-primary-foreground/80">
                  No spam, ever. I'll never share your email with anyone else.
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

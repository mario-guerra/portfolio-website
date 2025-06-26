import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiYoutube } from "react-icons/fi";

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
                      Mario Guerra
                    </h1>
                    <p className="text-foreground/80">Technical Product Manager</p>
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
                    <a href="mailto:mario.guerra@gmail.com" className="hover:text-primary">
                      mario.guerra@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiGithub className="mr-1 h-4 w-4" />
                    <a href="https://github.com/mario-guerra" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      github.com/mario-guerra
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiLinkedin className="mr-1 h-4 w-4" />
                    <a href="https://linkedin.com/in/mario-guerra" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      linkedin.com/in/mario-guerra
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-foreground/80">
                    <FiYoutube className="mr-1 h-4 w-4" />
                    <a href="https://www.youtube.com/@thisismarioguerra" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      youtube.com/@thisismarioguerra
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Summary */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Professional Summary</h2>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-foreground/80">
                    Technical Product Manager with over 15 years of experience driving innovation in developer tools, APIs, 
                    AI-driven solutions, and scalable infrastructure. Proven ability to lead cross-functional teams, influence 
                    stakeholders, and deliver impactful solutions that align technical capabilities with business needs. Skilled 
                    in designing intuitive, secure, and scalable APIs, leveraging Azure technologies, and applying data-driven 
                    roadmaps to optimize developer productivity and system reliability.
                  </p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Key Skills</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">Technical Expertise</h3>
                    <ul className="mt-2 space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>APIs, LLMs, RAG, Distributed Systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Python, C/C++, Rust, Azure, Cloud Computing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>OpenAPI Specification, Secure API Design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>LLMOps, Prompt Management, Data Processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Azure Foundry, Cosmos DB, Power BI, DevOps</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Product & Leadership</h3>
                    <ul className="mt-2 space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developer Tools, API-First Strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Cross-Functional Team Leadership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Data-Driven Decision Making</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developer Advocacy, Community Engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Strategic Product Thinking, Roadmapping</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Key Projects */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Key Projects</h2>
                <div className="space-y-6">
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold">TypeSpec 1.0 Launch (Microsoft)</h3>
                    <p className="text-foreground/80">
                      Led the zero-to-one launch of TypeSpec, delivering an API definition language that achieved 8-10x code reduction 
                      and 30% faster review times, delivering measurable developer productivity.
                    </p>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold">RAG-Enhanced Chatbots with Microsoft Teams Data</h3>
                    <p className="text-foreground/80">
                      Built RAG-enhanced chatbots using Graph API and Azure Foundry, leveraging LLMs to optimize workflows and 
                      demonstrate API-driven user support with secure data exchange.
                    </p>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold">@azure Functionality in GitHub Copilot</h3>
                    <p className="text-foreground/80">
                      Contributed to LLM-driven API integrations, enhancing developer productivity through context-aware code 
                      suggestions with secure data handling.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Work Experience</h2>
                <div className="space-y-6">
                  {/* Microsoft */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Senior Product Manager - TypeSpec API Definition Language</h3>
                        <p className="text-foreground/80">Microsoft</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>June 2021 - Present</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Drive product vision and strategy for TypeSpec, an open-source API definition language transforming API development.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Guide Azure service teams as a member of the Azure API Stewardship Board, driving best practices for API development.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Led the zero-to-one product launch of TypeSpec, delivering a high-impact solution that simplifies API design and accelerates development.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Achieved 8-10x code reduction and reduced API review times by 33% through improved readability and consistency.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Qualcomm */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Principal Software Engineer / Manager</h3>
                        <p className="text-foreground/80">Qualcomm</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>June 2008 - June 2021</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Led the development of tools and platforms for Qualcomm's Hexagon DSP, the core of Snapdragon modem (wireless) 
                          and Neural Processing Unit (NPU) technology.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Served as de-facto product manager for Hexagon tools used by first-party software development teams, gathering 
                          requirements, defining roadmaps, and designing user experiences that addressed developer pain points.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Improved on-time delivery by 35% through the implementation of data-driven development processes, 
                          optimizing project timelines and efficiency.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* ARM */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Senior Applications Engineer</h3>
                        <p className="text-foreground/80">ARM, Inc.</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>October 2006 - June 2008</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Delivered pre- and post-sales support for ARM's Cortex cores and software development tools.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Developed training materials and hosted sessions to drive customer adoption.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Education & Certification</h2>
                <div className="space-y-6">
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Masters of Engineering, Embedded Systems</h3>
                        <p className="text-foreground/80">Arizona State University</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Bachelor of Science, Computer Engineering</h3>
                        <p className="text-foreground/80">St. Mary's University</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Professional Certifications</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">Pragmatic Management Certified (PMC-I)</h3>
                    <p className="text-sm text-foreground/70">Pragmatic Institute</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">Rust Essential Training</h3>
                    <p className="text-sm text-foreground/70">LinkedIn Learning</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">AZ-900: Microsoft Azure Fundamentals</h3>
                    <p className="text-sm text-foreground/70">Microsoft</p>
                  </div>
                </div>
              </div>
              
              {/* Publications */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Selected Publications</h2>
                <div className="space-y-3">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold"><a href="https://typespec.io/blog/typespec-1-0-GA-release/" className="hover:text-primary">TypeSpec 1.0 GA - API-First, Made Practical</a></h3>
                    <p className="text-foreground/80">Highlighted TypeSpec's impact on scalable API development and developer productivity.</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold"><a href="https://marioguerra.xyz/blog/ai-document-summarization-with-sliding-content-window/" className="hover:text-primary">AI Document Summarization with Sliding Content Window</a></h3>
                    <p className="text-foreground/80">A practical solution for overcoming AI token limitations when summarizing large documents.</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold"><a href="https://marioguerra.xyz/documentation/making_apis_consumable_by_agents/" className="hover:text-primary">Making APIs Consumable by AI Agents</a></h3>
                    <p className="text-foreground/80">Strategies for designing APIs that can be effectively discovered, understood, and utilized by AI agents and LLMs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

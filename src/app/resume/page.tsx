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
                      Chad Jipiti
                    </h1>
                    <p className="text-foreground/80">AI & NLP Researcher</p>
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
                    <a href="mailto:chad.jipiti@example.com" className="hover:text-primary">
                      chad.jipiti@example.com
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
                    AI researcher with 8+ years of experience in natural language processing and machine learning.
                    Specializing in transformer architectures, neural networks, and large language models
                    with a strong focus on advancing conversational AI and human-computer interaction.
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
                        <span>PyTorch / TensorFlow / JAX / Transformers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Python / Julia / C++ / CUDA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Attention Mechanisms / Self-Supervised Learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>NLP / Large Language Models / Neural Networks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Git / GitHub / CI/CD / Distributed Computing</span>
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
                        <h3 className="text-lg font-semibold">Senior AI Researcher</h3>
                        <p className="text-foreground/80">DeepMind AI Labs</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>Oct 2022 - Present</p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Leading research on next-generation multimodal large language models, resulting in
                          state-of-the-art performance across multiple benchmarks.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Developed novel attention mechanism architectures, reducing training time by 35%
                          while improving model performance by 12%.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Mentored junior researchers and published 5 papers in top-tier conferences
                          including NeurIPS, ICML, and ACL.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Collaborated with ethics team to implement responsible AI guidelines and
                          reduce bias in language models.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Job 2 */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">AI Research Engineer</h3>
                        <p className="text-foreground/80">OpenAI</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>March 2020 - Sept 2022</p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Contributed to the development of GPT-3, focusing on optimization techniques
                          and training infrastructure for large-scale language models.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Implemented performance optimizations that reduced inference latency by 40%
                          and improved training throughput by 25%.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Developed methods for evaluating model outputs and fine-tuning systems
                          that significantly improved response quality and safety.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Job 3 */}
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">NLP Researcher</h3>
                        <p className="text-foreground/80">Google Brain</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>June 2017 - Feb 2020</p>
                        <p>Mountain View, CA</p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-foreground/80">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Worked on the original BERT team, contributing to architecture design
                          and pre-training methodology for transformer-based models.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Developed techniques for knowledge extraction and commonsense reasoning
                          that improved model performance on multiple NLP benchmarks.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Published research on attention mechanisms that has been cited over 1,500 times.
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
                        <h3 className="text-lg font-semibold">Ph.D. in Machine Learning</h3>
                        <p className="text-foreground/80">Stanford University</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>2014 - 2017</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Dissertation: "Attention Mechanisms for Neural Network Architectures"
                      Advisor: Dr. Andrew Ng
                    </p>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
                        <p className="text-foreground/80">Massachusetts Institute of Technology</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>2012 - 2014</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Specialized in artificial intelligence and natural language processing.
                      Research focus on neural network architectures for language understanding.
                    </p>
                  </div>
                  
                  <div className="space-y-3 rounded-lg border border-border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <div>
                        <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                        <p className="text-foreground/80">University of California, Berkeley</p>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>2008 - 2012</p>
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Graduated summa cum laude. Honors thesis on statistical methods for machine translation.
                      Minor in Mathematics.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Certifications</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">NVIDIA Deep Learning Institute Certified Instructor</h3>
                    <p className="text-sm text-foreground/70">NVIDIA • 2023</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">TensorFlow Certified Developer</h3>
                    <p className="text-sm text-foreground/70">Google • 2022</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">AWS Machine Learning Specialty</h3>
                    <p className="text-sm text-foreground/70">Amazon Web Services • 2021</p>
                  </div>
                  <div className="rounded-lg border border-border p-4">
                    <h3 className="font-semibold">Professional Certificate in AI Ethics</h3>
                    <p className="text-sm text-foreground/70">Harvard University • 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages
  // Uncomment and replace with your GitHub username and repo name
  // basePath: '/portfolio-website',
  // Add trailing slash to match GitHub Pages behavior
  trailingSlash: true,
};

export default nextConfig;

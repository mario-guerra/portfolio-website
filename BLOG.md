# Markdown Blog System for My Portfolio Website

This document explains how to use the Markdown-based blog system implemented in this portfolio website.

## Overview

The blog system is built around Markdown files stored in a specific directory structure. Each blog post is written in Markdown format and stored in its own directory, allowing for easy organization of post content and associated assets.

## Directory Structure

```
content/
  blog/
    YYYY-MM-DD-post-slug/
      index.md
      (other assets if needed)
```

- Each post has its own directory with date prefix: `YYYY-MM-DD-post-slug/`
- The main content is in `index.md`
- The post slug is extracted from the directory name (without the date prefix)

## Post Format

Each post's `index.md` file starts with frontmatter (metadata) enclosed in triple dashes (`---`), followed by the content in Markdown format:

```markdown
---
title: "Your Research Paper Title"
excerpt: "A brief description of your research findings"
date: "YYYY-MM-DD"
author: "Chad Jipiti"
category: "AI Research"
tags: ["Neural Networks", "Transformers", "NLP"]
featured: true|false
coverImage: "/images/blog/your-image.jpg"
---

# Your Post Title

Your content here in Markdown format...
```

### Frontmatter Fields

- **title** (required): The title of your post
- **excerpt** (required): A brief description/summary of your post (shown in previews)
- **date** (required): The publication date in YYYY-MM-DD format (used for sorting, not displayed on site)
- **author**: The author's name (defaults to "Chad Jipiti")
- **category**: A single category for the post (e.g., "AI Research", "NLP", "AI Ethics")
- **tags**: An array of tags related to the post
- **featured**: Boolean indicating if this is a featured post (shown prominently)
- **coverImage**: Path to the cover image (should be in `/public/images/blog/`)

## Creating a New Post

### Using the Script

The easiest way to create a new post is using the provided script:

```bash
./new-post.sh "Your Post Title"
```

This will:
1. Create a directory with the current date and slugified title
2. Create an `index.md` file with template frontmatter
3. Remind you to update the excerpt, category, tags, and cover image

### Manual Creation

1. Create a new directory in `content/blog/` with the format `YYYY-MM-DD-post-slug`
2. Create an `index.md` file inside that directory
3. Add the required frontmatter
4. Write your content in Markdown

## Adding Images

Post-specific images should be stored in the `public/images/blog/` directory. You can reference them in your Markdown content using:

```markdown
![Alt text](/images/blog/your-image.jpg)
```

## Formatting Guide

The blog supports standard Markdown syntax as well as GitHub Flavored Markdown (GFM) for features like tables and task lists:

- **Headers**: Use # symbols (# for h1, ## for h2, etc.)
- **Emphasis**: Use *italics* or **bold**
- **Lists**: Use - or * for bullet points, or 1. for numbered lists
- **Links**: Use [text](url)
- **Images**: Use ![alt text](image-url)
- **Code blocks**: Use triple backticks with optional language name
- **Tables**: Use GitHub-style tables
- **Task lists**: Use - [ ] for unchecked and - [x] for checked items

## Building and Deploying

When you build the site, all blog posts will be statically generated and included in the build. The site is configured for static export, making it deployable to any static hosting service.

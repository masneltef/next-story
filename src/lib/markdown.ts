import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Updated path to point to src/stories
const storiesDirectory = path.join(process.cwd(), 'src', 'stories')

export interface StoryFrontMatter {
  title: string
  date: string
  coverImage?: string
  summary: string
  tags?: string[]
  slug: string
}

export interface Story extends StoryFrontMatter {
  content: string
}

export function getAllStories(): StoryFrontMatter[] {
  // Read all files in the stories directory
  const fileNames = fs.readdirSync(storiesDirectory)
  
  const allStoriesData = fileNames
    .filter((name) => name.endsWith('.md'))  // Only get .md files
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')
      
      // Read markdown file as string
      const fullPath = path.join(storiesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Use gray-matter to parse the metadata section
      const matterResult = matter(fileContents)
      
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        coverImage: matterResult.data.coverImage,
        summary: matterResult.data.summary,
        tags: matterResult.data.tags || [],
      }
    })

  // Sort stories by date (newest first)
  return allStoriesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getStoryBySlug(slug: string): Promise<Story> {
  // Build the full path to the specific story file
  const fullPath = path.join(storiesDirectory, `${slug}.md`)
  
  // Read the file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  // Parse the frontmatter and content
  const matterResult = matter(fileContents)

  // Convert markdown content to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Return the complete story data
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    coverImage: matterResult.data.coverImage,
    summary: matterResult.data.summary,
    tags: matterResult.data.tags || [],
    content: contentHtml,
  }
}

export function getAllStorySlugs() {
  // Get all filenames in the stories directory
  const fileNames = fs.readdirSync(storiesDirectory)
  
  // Return array in the format Next.js expects for dynamic routes
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }))
}
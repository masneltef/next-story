import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllStorySlugs, getStoryBySlug } from '@/lib/markdown'
import Layout from '@/components/Layout'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  const slugs = getAllStorySlugs()
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }))
}

interface StoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function StoryPage({ params }: StoryPageProps) {
  // Await the params object first
  const { slug } = await params
  
  let story
  
  try {
    story = await getStoryBySlug(slug)
  } catch (error) {
    notFound()
  }

  return (
    <Layout title={story.title} description={story.summary}>
      <article className="max-w-3xl mx-auto">
        {/* Story Header */}
        <header className="mb-8">
          {story.coverImage && (
            <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <time>{formatDate(story.date)}</time>
            {story.tags && story.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {story.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {story.summary}
          </p>
        </header>

        {/* Story Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />

        {/* Navigation Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link
              href="/timeline"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Timeline
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Home
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </footer>
      </article>
    </Layout>
  )
}
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
  const { slug } = await params
  
  let story
  
  try {
    story = await getStoryBySlug(slug)
  } catch (error) {
    notFound()
  }

  return (
    <Layout title={story.title} description={story.summary}>
      <article className="max-w-4xl mx-auto">
        {/* Story Header */}
        <header className="mb-12">
          {story.coverImage && (
            <div className="aspect-video relative mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <time className="font-medium">{formatDate(story.date)}</time>
            {story.tags && story.tags.length > 0 && (
              <>
                <span className="hidden sm:block">•</span>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {story.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {story.summary}
          </p>
        </header>

        {/* Story Content - Fixed Typography */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            className="story-content"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </div>

        {/* Navigation Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/timeline"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Timeline
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors group"
            >
              Home
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </footer>
      </article>
    </Layout>
  )
}
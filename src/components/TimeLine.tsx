import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { StoryFrontMatter } from '@/lib/markdown'

interface TimelineProps {
  stories: StoryFrontMatter[]
}

export default function Timeline({ stories }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line - the vertical line connecting all stories */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      <div className="space-y-8">
        {stories.map((story, index) => (
          <div key={story.slug} className="relative flex items-start">
            {/* Timeline dot - the circle on the timeline */}
            <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md z-10"></div>
            
            {/* Story content card */}
            <div className="ml-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-full">
              <div className="flex items-center justify-between mb-3">
                <time className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {formatDate(story.date)}
                </time>
                {story.tags && story.tags.length > 0 && (
                  <div className="flex gap-1">
                    {story.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                <Link 
                  href={`/story/${story.slug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {story.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {story.summary}
              </p>
              
              <Link
                href={`/story/${story.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Read full story
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
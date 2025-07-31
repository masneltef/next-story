import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { StoryFrontMatter } from '@/lib/markdown'

interface StoryCardProps {
  story: StoryFrontMatter
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Cover Image */}
      {story.coverImage && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {/* Date and Tags */}
        <div className="flex items-center justify-between mb-3">
          <time className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {formatDate(story.date)}
          </time>
          {story.tags && story.tags.length > 0 && (
            <div className="flex gap-1">
              {story.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
              {story.tags.length > 2 && (
                <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">
                  +{story.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          <Link href={`/story/${story.slug}`}>
            {story.title}
          </Link>
        </h2>
        
        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {story.summary}
        </p>
        
        {/* Read More Link */}
        <Link
          href={`/story/${story.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
        >
          Read story
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
import { getAllStories } from '@/lib/markdown'
import Layout from '@/components/Layout'
import StoryCard from '@/components/StoryCard'
import Link from 'next/link'

export default function Home() {
  const stories = getAllStories()
  const recentStories = stories.slice(0, 6) // Show up to 6 recent stories

  return (
    <Layout 
      title="NextStory - Your Personal Storytelling Platform"
      description="Share your journey, experiences, and stories with the world using NextStory."
    >
      {/* Hero Section */}
      <section className="text-center py-16 mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Your Story,<br />Your Way
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Document your journey, share your experiences, and create beautiful stories 
            that inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/timeline"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Timeline
            </Link>
            <Link
              href="#stories"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Recent Stories</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {stories.length} {stories.length === 1 ? 'story' : 'stories'} shared so far
            </p>
          </div>
          {stories.length > 6 && (
            <Link
              href="/timeline"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold flex items-center"
            >
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
        
        {stories.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No stories yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Start by creating your first story in the stories folder.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-left">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  src/stories/my-story.md
                </code>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      {stories.length > 0 && (
        <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for more?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore the complete timeline of stories and experiences.
          </p>
          <Link
            href="/timeline"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Timeline
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      )}
    </Layout>
  )
}
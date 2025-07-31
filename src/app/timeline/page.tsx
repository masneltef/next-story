import { getAllStories } from '@/lib/markdown'
import Layout from '@/components/Layout'
import Timeline from '@/components/Timeline'

export default function TimelinePage() {
  const stories = getAllStories()

  return (
    <Layout 
      title="Timeline"
      description="Follow my journey through time - a chronological view of all my stories and experiences."
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Timeline</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          A chronological journey through my experiences, learnings, and stories.
        </p>
      </div>

      {stories.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">No stories yet</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The timeline will appear here once you add your first story.
          </p>
        </div>
      ) : (
        <Timeline stories={stories} />
      )}
    </Layout>
  )
}
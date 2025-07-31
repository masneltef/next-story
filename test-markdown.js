const { getAllStories, getStoryBySlug } = require('./src/lib/markdown.ts')

async function test() {
  console.log('All stories:', getAllStories())
  
  const story = await getStoryBySlug('my-first-story')
  console.log('Full story:', story)
}

test()
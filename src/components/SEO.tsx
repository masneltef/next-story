import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({ 
  title = 'NextStory',
  description = 'A personal storytelling framework built with Next.js. Document your journey, share your experiences, and create beautiful stories.',
  image = '/og-image.jpg',
  url = 'https://nextstory.vercel.app',
  type = 'website'
}: SEOProps) {
  const fullTitle = title === 'NextStory' ? title : `${title} | NextStory`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph - Facebook, LinkedIn */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NextStory" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="NextStory" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  )
}
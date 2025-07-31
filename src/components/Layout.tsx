import { ReactNode } from 'react'
import Navbar from './Navbar'
import SEO from './SEO'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function Layout({ children, title, description, image, url }: LayoutProps) {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        image={image}
        url={url}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-700 mt-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">NextStory</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A personal storytelling framework built with Next.js
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="/timeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Timeline</a>
                <a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  © {new Date().getFullYear()} NextStory. Built with ❤️ using Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}